import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../../components/about';
import Breadcrumb from '../../components/breadcrumb';
import BannerThree from '../../components/banner/index-3';
import CounterTwo from '../../components/counter/index-2';
import LatestProject from '../../components/home-page/latest-project';
import Footer from '../../components/layout/footer';
import { getAllItems, getFeaturedItems } from '../../lib/items-util';

function AboutPage({
    aboutItems,
    bannerThreeItems,
    projects,
    projectSectionItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>About Us - AKT</title>
                <meta
                    name="description"
                    content="AKT - Al Katheery Trading & Consulting"
                />
            </Head>
            <Breadcrumb
                subTitle="What we do"
                title="About us"
                desc="Over 43 years of industry presence, providing a deep understanding of civil, electrical, and oil & gas environmental projects."
            />
            <AboutOne aboutItems={aboutItems} />
            <BannerThree bannerThreeItems={bannerThreeItems} />
            <br />
            <br />
            <LatestProject
                projects={projects}
                projectSectionItems={projectSectionItems}
            />
            <br />
            <br />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const aboutItems = getAllItems('about');
    const bannerThreeItems = getAllItems('banner-3');
    const projectSectionItems = getAllItems('project-section');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const footerItems = getAllItems('footer');

    return {
        props: {
            aboutItems,
            bannerThreeItems,
            projectSectionItems,
            projects: LatestProject,
            footerItems,
        },
    };
}

AboutPage.propTypes = {
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    bannerThreeItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default AboutPage;
