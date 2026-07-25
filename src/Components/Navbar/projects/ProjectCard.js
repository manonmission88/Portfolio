import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

function ProjectCard({ title, description, link, image, stack, linkLabel = 'View on GitHub', linkVariant = 'github' }) {
    const linkIcon = linkVariant === 'paper' ? (
        <svg className="github-logo" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 3.75h7.5L19 8.25v12A1.75 1.75 0 0 1 17.25 22H7A1.75 1.75 0 0 1 5.25 20.25V5.5A1.75 1.75 0 0 1 7 3.75Z" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M14.5 3.75v4.5H19" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
            <path d="M8.5 11.25h7M8.5 14.5h7M8.5 17.75h4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
    ) : (
        <svg className="github-logo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    );
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
            </div>

            <div className="project-content">
                <h3 className="project-title">{title}</h3>

                <div className="project-stack">
                    {stack && stack.map((tech, index) => (
                        <span key={index} className="stack-item">{tech}</span>
                    ))}
                </div>

                <p className="project-description">{description}</p>

                <div className="project-footer">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="github-link">
                        {linkIcon}
                        {linkLabel}
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
    linkLabel: PropTypes.string,
    linkVariant: PropTypes.string,
};

export default ProjectCard;
