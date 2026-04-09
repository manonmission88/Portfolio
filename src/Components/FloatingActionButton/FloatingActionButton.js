import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import './FloatingActionButton.css';

const FloatingActionButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`fab ${isVisible ? 'fab-visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <Icon icon="mdi:arrow-up" />
        </button>
    );
};

export default FloatingActionButton;
