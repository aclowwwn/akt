import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import ProjectSliderTwo from '../../components/projects/project-slider-2';
import { getAllItems } from '../../lib/items-util';

function ProjectSliderPage({
    projects,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Raysut Project</title>
                <meta name="description" content="Raysut Project" />
            </Head>
            <Breadcrumb
                subTitle="AKT Projects"
                title="Raysut Project"
                desc=""
            />
            <ProjectSliderTwo projects={projects} />
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

ProjectSliderPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSliderPage;
