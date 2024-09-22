import React from 'react';
import { experiences } from './ExperienceData'; // Ensure the path is correct
import './Experience.css';
import transition from '../../../transition';

function Experience() {
    return (
        <section className="experience-section" id="experience">
            <div className="experience-timeline">
                {experiences && experiences.map((exp, index) => (  // Ensure experiences is defined before using map
                    <div key={index} className="experience-item">
                        <div className="experience-date">{exp.date}</div>
                        <h5 className="experience-company">{exp.company}</h5>
                        <h5 className="experience-role">{exp.role}</h5>
                        <ul className="experience-details">
                            {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default transition(Experience);
