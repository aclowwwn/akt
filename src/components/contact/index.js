import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function Contact({ contactItems }) {
    return (
        <main>
            {contactItems?.map((contactItem) => (
                <Container key={contactItem.id}>
                    <div className={classes.area}>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <div className={classes.img_wrap}>
                                    <div className={classes.img}>
                                        <img
                                            className="img-full"
                                            src={contactItem?.image}
                                            alt={contactItem?.imageAlt}
                                        />
                                    </div>
                                    <div className={classes.pattern}>
                                        <img
                                            src={contactItem?.pattern}
                                            alt={contactItem?.patternAlt}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{ span: 6 }} className="ps-50">
                                <div className={classes.content}>
                                    <span className={classes.subtitle}>
                                        {contactItem?.subTitle}
                                    </span>
                                    <h2 className={classes.title}>
                                        {contactItem?.title}
                                    </h2>
                                    <p className={classes.desc}>
                                        {contactItem?.desc}
                                    </p>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.addressTitle}
                                        </h3>
                                        <p className={classes.info_desc}>
                                            {contactItem?.addressDesc}
                                        </p>
                                    </div>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.infoTitle}
                                        </h3>
                                        <ul className={classes.info_list}>
                                            {contactItem?.infoList?.map(
                                                (item) => (
                                                    <li key={item.id}>
                                                        {item.listText}
                                                        <Link href={item.path}>
                                                            {item.listValue}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={classes.form_area}>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <h2 className={classes.form_title}>
                                    {contactItem?.formTitle}
                                </h2>
                                <p className={`${classes.form_desc} mb-0`}>
                                    {contactItem?.formDesc}
                                </p>
                                <form className={classes.form}>
                                    <div className={classes.form_group__input}>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name*"
                                            required
                                            className={`${classes.form_input__field} me-30`}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email*"
                                            required
                                            className={
                                                classes.form_input__field
                                            }
                                        />
                                    </div>
                                    <textarea
                                        type="text"
                                        placeholder="Message"
                                        className={`${classes.form_textarea__field} mt-30`}
                                    />
                                    <div className={classes.form_btn__wrap}>
                                        <button
                                            className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__primary}`}
                                            type="submit"
                                        >
                                            {contactItem?.btnText}
                                        </button>
                                    </div>
                                </form>
                            </Col>
                            
                            <Col lg={{ span: 6 }} className="ps-lg-50">
                                <div className="map_with__pattern">
                                    <iframe
                                        title="AKT contact title"
                                        className="map_size"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.984841327456!2d54.03827527402643!3d17.0244136131625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd15fc532f40e77%3A0xee22dfa3581e95ea!2sAl%20Katheery%20Trading%20%26%20Contracting%20Est.!5e0!3m2!1sen!2som!4v1724851270204!5m2!1sen!2som"
                                    />
                                    <div className="map_pattern">
                                        <img
                                            src={contactItem?.mapPattern}
                                            alt={contactItem?.mapPatternAlt}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            ))}
        </main>
    );
}

Contact.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default Contact;
