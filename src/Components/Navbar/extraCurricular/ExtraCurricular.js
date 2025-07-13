import React from "react";
import { extracurriculars } from "./ExtraCurricularData"; // Import data
import "./ExtraCurricular.css"; // Import CSS
import transition from '../../../transition';

const ExtraCurricular = () => {
    return (
        <section className="extracurricular-section">
            <h2 className="extracurricular-title">Extracurricular Activities</h2>
            <div className="extracurricular-grid">
                {extracurriculars.map((activity, index) => (
                    <div key={index} className="extracurricular-card">
                        <div className="extracurricular-image">
                            <img src={activity.image} alt={activity.title} />
                        </div>
                        <div className="extracurricular-date">({activity.date})</div>
                        <h3 className="extracurricular-card-title">{activity.title}</h3>
                        <h4 className="extracurricular-card-role">{activity.role}</h4>
                        <p className="extracurricular-card-description">
                            {activity.description}
                        </p>
                        {activity.link && (
                            <a 
                                href={activity.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="extracurricular-link"
                            >
                                View Details
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default transition(ExtraCurricular);
