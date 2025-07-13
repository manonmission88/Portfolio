import React, { useState, useRef } from 'react';
import { compressImage, createThumbnail, validateImageFile, generateImageURL } from '../../utils/imageOptimization';
import './ImageUpload.css';

const ImageUpload = ({ onImageUpload, acceptMultiple = false, className = '' }) => {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    const handleFileSelect = async (event) => {
        const files = Array.from(event.target.files);
        if (files.length === 0) return;

        setError('');
        setUploading(true);

        try {
            const processedImages = [];

            for (const file of files) {
                // Validate file
                validateImageFile(file);

                // Create preview URL
                const previewURL = generateImageURL(file);

                // Compress image
                const compressedImage = await compressImage(file);
                const thumbnail = await createThumbnail(file);

                const imageData = {
                    original: file,
                    compressed: compressedImage,
                    thumbnail: thumbnail,
                    preview: previewURL,
                    name: file.name,
                    size: file.size,
                    compressedSize: compressedImage.size
                };

                processedImages.push(imageData);
            }

            // Set preview for single image
            if (!acceptMultiple && processedImages.length > 0) {
                setPreview(processedImages[0].preview);
            }

            // Call parent callback
            if (onImageUpload) {
                onImageUpload(acceptMultiple ? processedImages : processedImages[0]);
            }

        } catch (err) {
            setError(err.message);
        } finally {
            setUploading(false);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const files = Array.from(event.dataTransfer.files);
        
        // Simulate file input change
        const fakeEvent = {
            target: { files }
        };
        handleFileSelect(fakeEvent);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const clearPreview = () => {
        setPreview(null);
        setError('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className={`image-upload ${className}`}>
            <div 
                className="upload-area"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple={acceptMultiple}
                    onChange={handleFileSelect}
                    style={{ display: 'none' }}
                />

                {uploading ? (
                    <div className="upload-loading">
                        <div className="spinner"></div>
                        <p>Processing image...</p>
                    </div>
                ) : preview ? (
                    <div className="upload-preview">
                        <img src={preview} alt="Preview" />
                        <button 
                            className="clear-preview"
                            onClick={(e) => {
                                e.stopPropagation();
                                clearPreview();
                            }}
                        >
                            ✕
                        </button>
                    </div>
                ) : (
                    <div className="upload-placeholder">
                        <div className="upload-icon">📷</div>
                        <p>Click to upload or drag and drop</p>
                        <span>JPEG, PNG, or WebP (max 10MB)</span>
                    </div>
                )}
            </div>

            {error && (
                <div className="upload-error">
                    {error}
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
