import PropTypes from 'prop-types';
import Link from 'next/link';

function ProjectSlider({ project }) {
    const imagePath = `/images/projects/${project?.slug}/${project?.image}`;

    return (
        <div className="project-item">
                <img src={imagePath} alt={project?.title} />
            <div className="project-content">
                <span className="sub-title">{project?.subTitle}</span>
                <h3 className="title mb-0">
                    <Link href="/projects/project-fullwidth" >{project?.title}</Link>
                </h3>
                <span>{project?.duration}</span>
            </div>
        </div>
    );
}

ProjectSlider.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSlider;
