import React, { useState, useEffect } from 'react';
import myResume from './updated_niure_manish_resume_swe.pdf';
import './resume.css'
import transition from '../../../transition';

function Resume() {
    const [currentResume, setCurrentResume] = useState(myResume);
    const [showUpload, setShowUpload] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [attemptCount, setAttemptCount] = useState(0);
    const [isBlocked, setIsBlocked] = useState(false);

    useEffect(() => {
        // Check for uploaded resume in localStorage
        const uploadedResume = localStorage.getItem('uploadedResume');
        if (uploadedResume) {
            setCurrentResume(uploadedResume);
        }

        // Check if admin mode is enabled (you can set this with a secret key)
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
                setCurrentResume(base64String);
                setShowUpload(false);
                alert('Resume updated successfully!');
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid PDF file.');
        }
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
        localStorage.removeItem('uploadedResume');
        setCurrentResume(myResume);
        alert('Reset to default resume!');
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
                        {showUpload ? 'Cancel' : 'Update Resume'}
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
                    <p className="upload-info">Select a PDF file to update your resume</p>
                </div>
            )}

            <embed src={currentResume} type="application/pdf" width="100%" height="1200px" style={{minHeight: '1200px'}} />
        </div>
    );
}

export default transition(Resume);
