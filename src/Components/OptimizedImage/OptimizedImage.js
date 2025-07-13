import React, { useState, useRef, useEffect } from 'react';
import './OptimizedImage.css';

const OptimizedImage = ({ 
    src, 
    alt, 
    className = '', 
    placeholder = '', 
    lazy = true,
    ...props 
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(!lazy);
    const [error, setError] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        if (!lazy) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [lazy]);

    const handleLoad = () => {
        setIsLoaded(true);
        setError(false);
    };

    const handleError = () => {
        setError(true);
        setIsLoaded(false);
    };

    return (
        <div 
            ref={imgRef} 
            className={`optimized-image ${className} ${isLoaded ? 'loaded' : ''} ${error ? 'error' : ''}`}
        >
            {/* Placeholder while loading */}
            {!isLoaded && !error && (
                <div className="image-placeholder">
                    {placeholder || (
                        <div className="placeholder-content">
                            <div className="placeholder-icon">🖼️</div>
                            <span>Loading...</span>
                        </div>
                    )}
                </div>
            )}

            {/* Error state */}
            {error && (
                <div className="image-error">
                    <div className="error-icon">❌</div>
                    <span>Failed to load image</span>
                </div>
            )}

            {/* Actual image */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    onLoad={handleLoad}
                    onError={handleError}
                    className={`actual-image ${isLoaded ? 'fade-in' : ''}`}
                    loading={lazy ? 'lazy' : 'eager'}
                    {...props}
                />
            )}
        </div>
    );
};

export default OptimizedImage;
