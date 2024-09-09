import PropTypes from 'prop-types';

function ProjectSliderItem({ project }) {
    const imagePath = `/images/projects/${project?.slug}/${project?.image}`;

    return (
        <div className="project-item">
                <img src={imagePath} alt={project?.title} />
            <div className="project-content">
                <span className="sub-title">{project?.subTitle}</span>
                <h3 className="title mb-0">
                    {project?.title}
                </h3>
            </div>
        </div>
    );
}

ProjectSliderItem.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSliderItem;
