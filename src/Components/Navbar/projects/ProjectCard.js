import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css'; // Custom CSS
import githubLogo from './github.png';

function ProjectCard({ title, description, link, image, stack }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} className="aspect-video object-cover rounded-lg" />
            </div>
            <div className="project-content">
                <div className="project-header">
                    <h3 className="project-title">{title}</h3>
                    <div className="project-stack">
                        {stack && stack.map((tech, index) => (
                            <span key={index} className="stack-item">{tech}</span>
                        ))}
                    </div>
                </div>
                <p className="project-description">{description}</p>
                <div className="project-footer">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="github-link">
                        <img src={githubLogo} alt="GitHub logo" className="github-logo" />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;