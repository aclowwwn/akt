import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../components/about';
import BannerOne from '../components/banner';
import Hero from '../components/home-page/hero';
import HomePageServices from '../components/home-page/homepage-services';
import LatestProject from '../components/home-page/latest-project';
import Footer from '../components/layout/footer';
import { getAllItems, getFeaturedItems } from '../lib/items-util';

function HomePage({
    heroItems,
    bannerItems,
    aboutItems,
    projects,
    projectSectionItems,
    services,
    serviceSectionItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Home - AKT</title>
                <meta
                    name="description"
                    content="AKT - Al Katheery Trading & Consulting Est."
                />
            </Head>
            <Hero heroItems={heroItems} />
            <BannerOne bannerItems={bannerItems} />
            <AboutOne aboutItems={aboutItems} />
            <LatestProject
                projects={projects}
                projectSectionItems={projectSectionItems}
            />
            <HomePageServices
                services={services}
                serviceSectionItems={serviceSectionItems}
            />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const bannerItems = getAllItems('banner');
    const aboutItems = getAllItems('about');
    const projectSectionItems = getAllItems('project-section');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const services = getAllItems('services');
    const serviceSectionItems = getAllItems('service-section');
    const HomePageServices = getFeaturedItems(services);
    const footerItems = getAllItems('footer');

    return {
        props: {
            heroItems,
            bannerItems,
            aboutItems,
            projectSectionItems,
            projects: LatestProject,
            services: HomePageServices,
            serviceSectionItems,
            footerItems
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    bannerItems: PropTypes.instanceOf(Object).isRequired,
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired
};

export default HomePage;
