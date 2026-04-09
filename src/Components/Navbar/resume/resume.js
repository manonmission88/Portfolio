import React, { useState, useEffect } from 'react';
import myResume from './niure_manish_2025.pdf';
import './resume.css';
import transition from '../../../transition';

// S3 public URL set in .env as REACT_APP_RESUME_URL
const S3_RESUME_URL = process.env.REACT_APP_RESUME_URL;

function Resume() {
    const [resumeUrl, setResumeUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [source, setSource] = useState('default'); // 'aws' | 'default'

    useEffect(() => {
        if (S3_RESUME_URL && S3_RESUME_URL.trim() !== '') {
            // Verify the S3 URL is reachable before switching to it
            fetch(S3_RESUME_URL, { method: 'HEAD' })
                .then((res) => {
                    if (res.ok) {
                        setResumeUrl(S3_RESUME_URL.trim());
                        setSource('aws');
                    } else {
                        throw new Error('S3 URL returned non-OK status');
                    }
                })
                .catch(() => {
                    // Fallback to local bundled PDF
                    setResumeUrl(myResume);
                    setSource('default');
                    setError(true);
                })
                .finally(() => setLoading(false));
        } else {
            // No S3 URL configured — use local PDF
            setResumeUrl(myResume);
            setSource('default');
            setLoading(false);
        }
    }, []);

    return (
        <div className="resumebox">
            {/* Header */}
            <div className="resume-header">
                <h2 className="resume-title">Resume</h2>
                <div className="resume-header-actions">
                    <span className={`resume-source-badge ${source === 'aws' ? 'badge-aws' : 'badge-local'}`}>
                        {source === 'aws' ? 'AWS S3' : 'Local'}
                    </span>
                    {resumeUrl && (
                        <a
                            href={resumeUrl}
                            download="Manish_Niure_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-download-btn"
                        >
                            ↓ Download PDF
                        </a>
                    )}
                </div>
            </div>

            {/* S3 configured but unreachable */}
            {error && (
                <div className="resume-notice resume-notice-warn">
                    Could not reach the S3 URL — showing the bundled default resume instead.
                </div>
            )}

            {/* PDF viewer */}
            {loading ? (
                <div className="resume-loading">
                    <div className="resume-spinner" />
                    <p>Loading resume…</p>
                </div>
            ) : (
                <iframe
                    src={resumeUrl}
                    title="Manish Niure Resume"
                    width="100%"
                    className="resume-iframe"
                />
            )}
        </div>
    );
}

export default transition(Resume);
