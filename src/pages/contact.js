import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import Contact from '../components/contact';
import Footer from '../components/layout/footer';
import { getAllItems } from '../lib/items-util';

function ContactPage({ contactItems, newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Contact - AKT</title>
                <meta
                    name="description"
                    content="AKT - AKT - Al Katheery Trading & Consulting Est."
                />
            </Head>
            <Breadcrumb
                subTitle="Contact us"
                title="Get in Touch"
                desc=""
            />
            <Contact contactItems={contactItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const contactItems = getAllItems('contact');
    const footerItems = getAllItems('footer');

    return {
        props: {
            contactItems,
            footerItems,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactPage;
