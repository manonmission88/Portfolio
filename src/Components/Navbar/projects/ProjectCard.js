import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css'; // Custom CSS
import githubLogo from './github.png';

function ProjectCard({ title, description, link }) {
    return (
        <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
            </div>
            <div className="project-logo">
                <a href={link} target="_blank" rel="noopener noreferrer" className="github-link">
                    <img src={githubLogo} alt="GitHub logo" className="github-logo" />
                </a>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default ProjectCard;
