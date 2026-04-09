import React from 'react';
import { projectData } from './projectData';
import ProjectCard from './ProjectCard';
import transition from '../../../transition';
import './Projects.css';

function Projects() {
    return (
        <section className="projects-section">
            <div className="projects-section-header">
                <h2>Projects</h2>
                <p>A selection of things I've built — from CLI tools to robotics and ML models.</p>
            </div>
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

export default transition(Projects);
