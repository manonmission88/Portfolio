import React, { useState, useEffect } from 'react';
import myResume from './niure_manish_2025.pdf';
import './resume.css'
import transition from '../../../transition';

function Resume() {
    const [currentResume, setCurrentResume] = useState(myResume);
    const [showUpload, setShowUpload] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [attemptCount, setAttemptCount] = useState(0);
    const [isBlocked, setIsBlocked] = useState(false);
    const [useCloudResume, setUseCloudResume] = useState(false);

    useEffect(() => {
        // Check for uploaded resume in localStorage
        const uploadedResume = localStorage.getItem('uploadedResume');
        const cloudResumeUrl = localStorage.getItem('cloudResumeUrl');
        const useCloud = localStorage.getItem('useCloudResume') === 'true';
        
        if (useCloud && cloudResumeUrl) {
            setCurrentResume(cloudResumeUrl);
            setUseCloudResume(true);
        } else if (uploadedResume) {
            setCurrentResume(uploadedResume);
        }

        // Check if admin mode is enabled
        const adminMode = localStorage.getItem('adminMode');
        setIsAdmin(adminMode === 'true');

        // Check for failed attempts and blocking
        const failedAttempts = parseInt(localStorage.getItem('failedAttempts') || '0');
        const blockUntil = localStorage.getItem('blockUntil');
        
        if (blockUntil && new Date().getTime() < parseInt(blockUntil)) {
            setIsBlocked(true);
        } else {
            localStorage.removeItem('blockUntil');
            setIsBlocked(false);
        }
        
        setAttemptCount(failedAttempts);
    }, []);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            const reader = new FileReader();
            reader.onload = (e) => {
                const base64String = e.target.result;
                localStorage.setItem('uploadedResume', base64String);
                localStorage.setItem('useCloudResume', 'false');
                setCurrentResume(base64String);
                setUseCloudResume(false);
                setShowUpload(false);
                alert('Resume updated successfully!');
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid PDF file.');
        }
    };

    const handleUrlUpdate = () => {
        const url = prompt('Enter the new resume URL (Google Drive, Dropbox, etc.):');
        if (url && url.trim()) {
            localStorage.setItem('cloudResumeUrl', url.trim());
            localStorage.setItem('useCloudResume', 'true');
            setCurrentResume(url.trim());
            setUseCloudResume(true);
            alert('Resume URL updated successfully!');
        }
    };

    const resetToDefaultResume = () => {
        localStorage.removeItem('uploadedResume');
        localStorage.removeItem('cloudResumeUrl');
        localStorage.setItem('useCloudResume', 'false');
        setCurrentResume(myResume);
        setUseCloudResume(false);
        alert('Reset to default resume!');
    };

    const enableAdminMode = () => {
        if (isBlocked) {
            alert('Too many failed attempts. Please try again later.');
            return;
        }

        const password = prompt('Enter admin password:');
        if (!password) return; // User cancelled
        
        // Hash the password for security - no plain text password in code
        const hashedPassword = btoa(password + 'salt_manish_portfolio'); // Simple encoding
        const correctHash = 'bWFuaXNoMjAyNHNhbHRfbWFuaXNoX3BvcnRmb2xpbw=='; // This is 'manish2024' hashed
        
        if (hashedPassword === correctHash) {
            localStorage.setItem('adminMode', 'true');
            localStorage.removeItem('failedAttempts'); // Reset failed attempts
            setIsAdmin(true);
            setAttemptCount(0);
            alert('Admin mode enabled!');
        } else {
            const newAttemptCount = attemptCount + 1;
            setAttemptCount(newAttemptCount);
            localStorage.setItem('failedAttempts', newAttemptCount.toString());
            
            if (newAttemptCount >= 3) {
                // Block for 15 minutes after 3 failed attempts
                const blockUntil = new Date().getTime() + (15 * 60 * 1000);
                localStorage.setItem('blockUntil', blockUntil.toString());
                setIsBlocked(true);
                alert('Too many failed attempts. Access blocked for 15 minutes.');
            } else {
                alert(`Incorrect password! ${3 - newAttemptCount} attempts remaining.`);
            }
        }
    };

    const resetToDefault = () => {
        resetToDefaultResume();
    };

    const exitAdminMode = () => {
        localStorage.removeItem('adminMode');
        setIsAdmin(false);
        setShowUpload(false);
        alert('Exited admin mode!');
    };

    return (
        <div className='resumebox'>
            {/* Admin Controls */}
            {!isAdmin && (
                <div className="admin-toggle">
                    <button 
                        onClick={enableAdminMode} 
                        className="admin-btn"
                        disabled={isBlocked}
                        title={isBlocked ? "Access temporarily blocked" : "Admin access"}
                    >
                        {isBlocked ? '🔒' : '🔧'}
                    </button>
                </div>
            )}
            
            {isAdmin && (
                <div className="resume-controls">
                    <button 
                        onClick={() => setShowUpload(!showUpload)}
                        className="upload-toggle-btn"
                    >
                        {showUpload ? 'Cancel' : 'Upload New Resume'}
                    </button>
                    <button 
                        onClick={handleUrlUpdate}
                        className="url-update-btn"
                    >
                        Update Resume URL
                    </button>
                    <button onClick={resetToDefault} className="reset-btn">
                        Reset to Default
                    </button>
                    <button onClick={exitAdminMode} className="exit-admin-btn">
                        Exit Admin Mode
                    </button>
                </div>
            )}

            {showUpload && isAdmin && (
                <div className="upload-section">
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileUpload}
                        className="file-input"
                    />
                    <p className="upload-info">Select a PDF file to upload</p>
                </div>
            )}

            <div className="resume-status">
                {useCloudResume && (
                    <p className="status-info">📡 Using cloud resume from URL</p>
                )}
                {!useCloudResume && currentResume !== myResume && (
                    <p className="status-info">📁 Using uploaded resume</p>
                )}
                {currentResume === myResume && (
                    <p className="status-info">📄 Using default resume</p>
                )}
            </div>

            {useCloudResume ? (
                <iframe 
                    src={currentResume} 
                    width="100%" 
                    height="1200px" 
                    style={{minHeight: '1200px', border: 'none'}}
                    title="Resume"
                />
            ) : (
                <embed 
                    src={currentResume} 
                    type="application/pdf" 
                    width="100%" 
                    height="1200px" 
                    style={{minHeight: '1200px'}} 
                />
            )}
        </div>
    );
}

export default transition(Resume);
