import React from "react";
import { extracurriculars } from "./ExtraCurricularData"; // Import data
import "./ExtraCurricular.css"; // Import CSS
import transition from '../../../transition';

const ExtraCurricular = () => {
    return (
        <section className="extracurricular-section">
            <div className="extracurricular-grid">
                {extracurriculars.map((activity, index) => (
                    <div key={index} className="extracurricular-card">
                        <a href={activity.link} target="_blank" rel="noopener noreferrer">
                            <img src={activity.image} alt={activity.title} className="extracurricular-image" />
                        </a>
                        <div className="extracurricular-content">
                            <h3 className="extracurricular-card-title">{activity.title}</h3>
                            <h4 className="extracurricular-card-role">{activity.role}</h4>
                            <p className="extracurricular-card-date">{activity.date}</p>
                            <p className="extracurricular-card-description">
                                {activity.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default transition(ExtraCurricular);
