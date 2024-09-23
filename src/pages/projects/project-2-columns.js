import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import ProjectTwoColumns from '../../components/projects/two-columns';
import { getAllItems } from '../../lib/items-util';

function ProjectTwoColumnsPage({
    projects,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Dhofar Project</title>
                <meta name="description" content="Dhofar Project" />
            </Head>
            <Breadcrumb
                subTitle={projects[0]?.subTitle}
                title={projects[0]?.title}
                desc=""
            />
            <ProjectTwoColumns projects={projects} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('projects');
    const bannerTwoItems = getAllItems('banner-2');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            projects: allItems,
            bannerTwoItems,
            newsletterItems,
            footerItems,
        },
    };
}

ProjectTwoColumnsPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectTwoColumnsPage;
