import './Projects.css'
import { projectData } from './projectData'
import githubRepo from './github.png'


const Projects = () => {
    return (
        <section className="portfolio-grid">
            {projectData.map((project) => (
                <section key={project.id} className="project">
                    <img
                        src={project.img} 
                        alt=""
                        aria-hidden="true"
                        className="project-img"
                    />
                    <section className="project-description">
                        <p className="white-text p-tag">{project.description}</p>
                        <section className="project-meta-stack">
                            {project.stack.map((stackName, index) => (
                                <p key={index}>{stackName}</p>
                            ))}
                        </section>
                        {/* <img src={GithubRepo} alt="Link to Github" /> */}
                        <section className="project-links">
                            <a href={project.source}>
                                <img src={githubRepo} alt="Link to Github" />
                            </a>
                        </section>
                    </section>
                </section>
            ))}
        </section>

    );
};

export default Projects;
