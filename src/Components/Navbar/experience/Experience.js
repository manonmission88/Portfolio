import React from "react";
import { experiences } from "./ExperienceData";
import { Meta, Aws } from "@lobehub/icons"; // Icons for Meta and AWS
import howardUniversity from '../../asset/Howard University-05.jpg';
import "./Experience.css";

// Helper function to dynamically get the icon or image based on the company name
const getCompanyIcon = (companyName) => {
    const lowerName = companyName.toLowerCase();

    if (lowerName.includes("meta")) {
        return <Meta.Color size={56} />;
    } else if (lowerName.includes("aws") || lowerName.includes("amazon")) {
        return <Aws.Color size={56} />;
    } else if (lowerName.includes("university") || lowerName.includes("howard")) {
        return (
            <img
                src={howardUniversity}
                alt="Howard University"
                className="company-icon-image"
            />
        );
    } else {
        // Default fallback: Use the Howard University image as a default
        return (
            <img
                src={howardUniversity}
                alt="Default Icon"
                className="company-icon-image"
            />
        );
    }
};

const Experience = () => {
    return (
        <section className="experience-section">

            {/* Employment Section */}
            <h3 className="grid-category-title">Employment</h3>
            <div className="experience-grid">
                {experiences.employment.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <div className="experience-card-icon">{getCompanyIcon(exp.company)}</div>
                        <div className="experience-card-date">({exp.date})</div>
                        <h3 className="experience-card-title">{exp.company}</h3>
                        <h4 className="experience-card-subtitle">{exp.role}</h4>
                        <ul className="experience-card-details">
                            {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Research Experiences Section */}
            <h3 className="grid-category-title">Research Experiences</h3>
            <div className="experience-grid">
                {experiences.research.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <div className="experience-card-icon">{getCompanyIcon(exp.company)}</div>
                        <div className="experience-card-date">({exp.date})</div>
                        <h3 className="experience-card-title">{exp.company}</h3>
                        <h4 className="experience-card-subtitle">{exp.role}</h4>
                        <ul className="experience-card-details">
                            {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
