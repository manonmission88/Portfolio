import './Projects.css'
import { projectData } from './projectData'
import githubLogo from './github.png'
import transition from '../../../transition';


const ProfileCard = ({ project }) => {
    return (
        <div className="profile-card" key={project.id}>
            <div className="profile-description">
                <h1 className="heading">{project.name}</h1>
                <p className="white-text p-tag">{project.description}</p>
            </div>
            <div className="profile-links">
                <a href={project.source} className="github-link">
                    <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                </a>
                <div className="project-stack">
                    {project.stack.map((item, index) => (
                        <span key={index} className="stack-item">{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};
const Projects = () => {
    return (
        <section className="portfolio-grid">
            {projectData.map((project) => (
                <ProfileCard project={project} />
            ))}
        </section>
    );
};
export default transition(Projects);
