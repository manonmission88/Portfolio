import React, { useState, useEffect } from 'react';
import ImageUpload from '../ImageUpload/ImageUpload';
import OptimizedImage from '../OptimizedImage/OptimizedImage';
import './ImageManager.css';

const ImageManager = () => {
    const [images, setImages] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [password, setPassword] = useState('');
    const [showAdmin, setShowAdmin] = useState(false);

    // Load images from localStorage
    useEffect(() => {
        const savedImages = localStorage.getItem('portfolio-images');
        if (savedImages) {
            setImages(JSON.parse(savedImages));
        }

        // Check if user is already authenticated
        const adminAuth = localStorage.getItem('portfolio-admin-auth');
        if (adminAuth === 'true') {
            setIsAdmin(true);
        }
    }, []);

    // Save images to localStorage
    const saveImages = (newImages) => {
        setImages(newImages);
        localStorage.setItem('portfolio-images', JSON.stringify(newImages));
    };

    const handleAdminLogin = () => {
        // Simple password check (in production, use proper authentication)
        if (password === 'admin123') {
            setIsAdmin(true);
            localStorage.setItem('portfolio-admin-auth', 'true');
            setShowAdmin(false);
            setPassword('');
        } else {
            alert('Incorrect password');
        }
    };

    const handleImageUpload = (imageData) => {
        const newImage = {
            id: Date.now(),
            name: imageData.name,
            url: imageData.preview,
            uploadDate: new Date().toISOString(),
            size: imageData.size,
            compressedSize: imageData.compressedSize
        };

        const updatedImages = [...images, newImage];
        saveImages(updatedImages);
    };

    const handleImageDelete = (id) => {
        const updatedImages = images.filter(img => img.id !== id);
        saveImages(updatedImages);
    };

    const handleLogout = () => {
        setIsAdmin(false);
        localStorage.removeItem('portfolio-admin-auth');
    };

    return (
        <div className="image-manager">
            <div className="manager-header">
                <h2>Image Gallery</h2>
                {!isAdmin && (
                    <button 
                        className="admin-btn"
                        onClick={() => setShowAdmin(true)}
                    >
                        Admin Access
                    </button>
                )}
                {isAdmin && (
                    <button 
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                )}
            </div>

            {/* Admin Login Modal */}
            {showAdmin && !isAdmin && (
                <div className="admin-modal">
                    <div className="modal-content">
                        <h3>Admin Login</h3>
                        <input
                            type="password"
                            placeholder="Enter admin password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                        />
                        <div className="modal-actions">
                            <button onClick={handleAdminLogin}>Login</button>
                            <button onClick={() => setShowAdmin(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Upload (Admin Only) */}
            {isAdmin && (
                <div className="upload-section">
                    <h3>Upload New Image</h3>
                    <ImageUpload 
                        onImageUpload={handleImageUpload}
                        className="gallery-upload"
                    />
                </div>
            )}

            {/* Image Grid */}
            <div className="image-grid">
                {images.length === 0 ? (
                    <div className="empty-gallery">
                        <p>No images uploaded yet</p>
                        {isAdmin && <p>Upload some images to get started!</p>}
                    </div>
                ) : (
                    images.map((image) => (
                        <div key={image.id} className="image-item">
                            <OptimizedImage
                                src={image.url}
                                alt={image.name}
                                className="gallery-image"
                            />
                            <div className="image-info">
                                <span className="image-name">{image.name}</span>
                                <span className="image-date">
                                    {new Date(image.uploadDate).toLocaleDateString()}
                                </span>
                                {isAdmin && (
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleImageDelete(image.id)}
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Image Stats (Admin Only) */}
            {isAdmin && images.length > 0 && (
                <div className="image-stats">
                    <h3>Gallery Statistics</h3>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-label">Total Images:</span>
                            <span className="stat-value">{images.length}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Total Size:</span>
                            <span className="stat-value">
                                {(images.reduce((acc, img) => acc + img.size, 0) / (1024 * 1024)).toFixed(2)} MB
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageManager;
