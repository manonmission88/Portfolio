import React from 'react';
import { projectData } from './projectData'; // Ensure path is correct
import ProjectCard from './ProjectCard';
import './Projects.css';

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
                        image={project.img}
                        stack={project.stack}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;