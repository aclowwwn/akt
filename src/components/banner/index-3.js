import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';
import classes from './banner-3.module.scss';

function BannerThree({ bannerThreeItems }) {
    return (
        <div className="banner_area">
            <Container>
                <Row className="g-30">
                    {bannerThreeItems?.map((bannerThreeItem) => (
                        <Col
                            lg={{ span: 4 }}
                            md={{ span: 6 }}
                            key={bannerThreeItem.id}
                        >
                            <div
                                className={bannerThreeItem.dynamicClassName
                                    .split(' ')
                                    .map((item) => classes[item])
                                    .join(' ')}
                            >
                                <div
                                    className={classes.content}
                                    data-count={`${bannerThreeItem?.dataCount}`}
                                >
                                    <h2 className={classes.title}>
                                        {bannerThreeItem?.title}
                                    </h2>
                                    {bannerThreeItem?.excerpt ?
                                    <p className={classes.desc}>
                                        {bannerThreeItem?.excerpt}
                                    </p>:
                                    <ul className={classes.desc}>
                                        <li>{bannerThreeItem?.excerpt1}</li>
                                        <li>{bannerThreeItem?.excerpt2}</li>
                                        <li>{bannerThreeItem?.excerpt3}</li>
                                        <br />
                                    </ul>
                                    }
                                    <Link
                                        href={`${bannerThreeItem.path}`}
                                        className={classes.link__btn}
                                    >
                                        {bannerThreeItem?.btnText}
                                        <span className={classes.icon}>
                                            <IoArrowForwardOutline />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

BannerThree.propTypes = {
    bannerThreeItems: PropTypes.instanceOf(Object).isRequired,
};

export default BannerThree;
