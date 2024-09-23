import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import ProjectFullwidth from '../../components/projects/fullwidth';
import { getAllItems } from '../../lib/items-util';

function ProjectFullwidthPage({
    projects,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>AKT Projects</title>
                <meta name="description" content="AKT Projects" />
            </Head>
            <Breadcrumb
                subTitle="See our latest"
                title="Projects"
                desc="Over 43 years of industry presence, providing a deep understanding of civil, electrical, and oil & gas environmental projects."
            />
            <ProjectFullwidth projects={projects} />
            {/* <BannerFive bannerTwoItems={bannerTwoItems} /> */}
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('projects');
    const bannerTwoItems = getAllItems('banner-2');
    const footerItems = getAllItems('footer');

    return {
        props: {
            projects: allItems,
            bannerTwoItems,
            footerItems,
        },
    };
}

ProjectFullwidthPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectFullwidthPage;
