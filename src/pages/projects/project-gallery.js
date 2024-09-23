import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import ProjectGallery from '../../components/projects/gallery';
import { getAllItems } from '../../lib/items-util';

function ProjectGalleryPage({
    projects,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Al Tawatir Project</title>
                <meta name="description" content="Al Tawatir Project" />
            </Head>
            <Breadcrumb
                subTitle="AKT Projects"
                title="Al Tawatir Project"
                desc=""
            />
            <ProjectGallery projects={projects} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('projects');
    const footerItems = getAllItems('footer');

    return {
        props: {
            projects: allItems,
            footerItems,
        },
    };
}

ProjectGalleryPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectGalleryPage;
