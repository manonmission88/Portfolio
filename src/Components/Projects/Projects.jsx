import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Mentoxy",
      type: "Website",
      date: "March 2024 - Present",
      description: [
        "Co-developed Mentoxy: a platform connecting students and recent grads with mentors, leveraging comprehensive design docs and user flows in Figma.",
        "Built the front end with HTML, CSS, JavaScript, ReactJS, and integrated a MySQL database for secure, scalable mentor matching."
      ],
      link: "#"
    },
    {
      title: "Custom Shell",
      type: "GitHub Repo",
      date: "Oct 2023",
      description: [
        "Developed a command shell from scratch in C, integrating core features inspired by popular shells (sh, bash, csh, tcsh) to support robust command parsing and process management."
      ],
      link: "#"
    },
    {
      title: "Disaster Tweet Classifier",
      type: "GitHub Repo",
      date: "May 2023",
      description: [
        "Developed a disaster tweet classification model using TensorFlow, Scikit-learn, Pandas, and NumPy, significantly improving its accuracy through comprehensive hyperparameter tuning.",
        "Achieved 90% accuracy on training data and 89% accuracy on validation data for disaster tweet classification, securing a top 5 rank among 25 teams in the Google TechExchange cohort."
      ],
      link: "#"
    },
    {
      title: "Local Wiki",
      type: "GitHub Repo",
      date: "May 2023",
      description: [
        "Developed a wiki application using Python, Flask, HTML, CSS, and Jinja, enabling dynamic content for local place information.",
        "Deployed on Google Cloud Platform (GCP) via a CI/CD pipeline, ensuring seamless updates and minimal downtime.",
        "Designed and led a feature to support searching, sorting and filtering of wiki pages to enhance user experience."
      ],
      link: "#"
    }
  ];

  const activities = [
    {
      title: "BisonBytes Hackathon",
      platform: "Devpost",
      date: "March 2025",
      description: [
        "Won the first prize for the best use of the Gemini track by developing \"SONIQUE\", an AI-powered, voice-interactive learning companion for visually impaired children, using Swift for iOS, React for the web app, and a backend powered by Python, TinyDB, and the Gemini API."
      ],
      link: "#"
    },
    {
      title: "BisonHacks-Archimedes-Interactive Notebook",
      platform: "Devpost",
      date: "Feb 2025",
      description: [
        "Built an AI-powered interactive notebook during a 24-hour hackathon to help students create personalized study plans.",
        "Used Streamlit for the frontend, Python with integrated AI models for the backend, and Langchain to interact with LLM APIs (Google Gemini, OpenAI), with SurrealDB (Dockerized) for data storage."
      ],
      link: "#"
    }
  ];

  return (
    <section id="projects-section" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-type">{project.type}</span>
                <span className="project-date">{project.date}</span>
              </div>
              <div className="project-description">
                {project.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          ))}
        </div>

        <h2 className="section-title">Activities</h2>
        <div className="projects-grid">
          {activities.map((activity, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{activity.title}</h3>
                <span className="project-type">{activity.platform}</span>
                <span className="project-date">{activity.date}</span>
              </div>
              <div className="project-description">
                {activity.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
              <a href={activity.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 