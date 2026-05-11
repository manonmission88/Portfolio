import React from 'react';
import './resume.css';
import transition from '../../../transition';

const RESUME_URL = 'https://resume-manish.s3.us-east-1.amazonaws.com/manish_niure_resume.pdf';

function Resume() {
    return (
        <div className="resumebox">
            <div className="resume-header">
                <h2 className="resume-title">Resume</h2>
                <div className="resume-header-actions">
                    <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-download-btn resume-open-btn"
                    >
                        Open PDF
                    </a>
                    <a
                        href={RESUME_URL}
                        download="manish_niure_resume.pdf"
                        className="resume-download-btn resume-download-link"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            <div className="resume-viewer">
                <div className="resume-viewer-bar">
                    <div className="resume-window-controls" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="resume-viewer-meta">
                        <span className="resume-viewer-label">Resume preview</span>
                        <span className="resume-viewer-filename">manish_niure_resume.pdf</span>
                    </div>
                    <a
                        href={RESUME_URL}
                        download="manish_niure_resume.pdf"
                        className="resume-inline-download"
                    >
                        Download
                    </a>
                </div>
                <iframe
                    src={RESUME_URL}
                    title="Manish Niure Resume"
                    className="resume-iframe"
                />
            </div>
        </div>
    );
}

export default transition(Resume);
