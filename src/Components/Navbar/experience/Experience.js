import React from 'react';
import { experiences } from './ExperienceData'; // Ensure the path is correct
import './Experience.css';
import transition from '../../../transition';

function Experience() {
    return (
        <section className="experience-section" id="experience">
            {/* Employment Section */}
            <div className="experience-category">
                <h3 className="category-title">EMPLOYMENT</h3>
                <div className="experience-items">
                    {experiences.employment.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-content">
                                <div className="experience-header">
                                    <div className="experience-date">{exp.date}</div>
                                    <h6 className="experience-company">{exp.company}</h6>
                                    <h6 className="experience-role">{exp.role}</h6>
                                    {/* Link could be added if needed */}
                                </div>
                                <ul className="experience-details">
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Research Section */}
            <div className="experience-category">
                <h3 className="category-title">RESEARCH EXPERIENCES</h3>
                <div className="experience-items">
                    {experiences.research.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-content">
                                <div className="experience-header">
                                    <div className="experience-date">{exp.date}</div>
                                    <h6 className="experience-company">{exp.company}</h6>
                                    <h6 className="experience-role">{exp.role}</h6>
                                    {/* Link could be added if needed */}
                                </div>
                                <ul className="experience-details">
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default transition(Experience);
