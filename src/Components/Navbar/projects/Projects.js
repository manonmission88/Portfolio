import React from 'react';
import { projectData } from './projectData';
import ProjectCard from './ProjectCard';
import transition from '../../../transition';
import './Projects.css'; // Custom CSS

function Projects() {
    return (
        <section className="projects-section">
            <div className="portfolio-grid">
                {projectData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.name}
                        description={project.description}
                        link={project.source}
                    />
                ))}
            </div>
        </section>
    );
}

export default transition(Projects);
