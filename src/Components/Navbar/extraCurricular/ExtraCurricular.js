import React from "react";
import { extracurriculars, certificates } from "./ExtraCurricularData";
import "./ExtraCurricular.css";
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
                        <div className="extracurricular-card-body">
                            <span className="extracurricular-date">{activity.date}</span>
                            <h3 className="extracurricular-card-title">{activity.title}</h3>
                            <p className="extracurricular-card-role">{activity.role}</p>
                            <p className="extracurricular-card-description">{activity.description}</p>
                            {activity.link && (
                                <a
                                    href={activity.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="extracurricular-link"
                                >
                                    View Details →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Certificates Section */}
            <h3 className="certificates-subtitle">Certificates & Achievements</h3>
            <div className="certificates-grid">
                {certificates.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.file}
                        download
                        className="certificate-card"
                        title={`Download ${cert.title}`}
                    >
                        {cert.image ? (
                            <div className="certificate-image-wrap">
                                <img src={cert.image} alt={cert.title} className="certificate-image" />
                            </div>
                        ) : (
                            <div className="certificate-icon">{cert.icon}</div>
                        )}
                        <p className="certificate-label">{cert.title}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default transition(ExtraCurricular);
