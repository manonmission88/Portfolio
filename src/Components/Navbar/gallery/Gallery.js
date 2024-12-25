import React from "react";
import "./Gallery.css";
import transition from '../../../transition';

// Import images
import soccer from "./images/soccer.jpeg";
import travel from "./images/oregon.jpeg";
import chess from "./images/chess.jpg";
import friends from "./images/group.JPG";
import techExchange from './images/techexchange.jpeg';
import meta from './images/meta.jpeg';
import howard from './images/freshman_howard.jpg';
import hiking from './images/hiking1.jpg';
import virginia from './images/hiking.jpeg';


// Gallery data with imported images
const galleryImages = [
    { id: 1, src: soccer, alt: "Playing Soccer" },
    { id: 2, src: techExchange, alt: "Tech Exchange Program" },
    { id: 3, src: travel, alt: "oregon-Crater Lake" },
    { id: 4, src: friends, alt: "College Friends" },
    { id: 5, src: meta, alt: "Internship at Meta" },
    { id: 6, src: chess, alt: "Playing chess" },
    { id: 7, src: howard, alt: "freshman year at Howard University" },
    { id: 8, src: hiking, alt: "hiking at Shivapuri National Park" },
    { id: 9, src: virginia, alt: "shenandoah national park" }

];

const Gallery = () => {
    return (
        <section className="gallery-section">
            <div className="gallery-container">
                {galleryImages.map((image) => (
                    <div key={image.id} className="gallery-item">
                        <img src={image.src} alt={image.alt} className="gallery-image" />
                        <p className="gallery-caption">{image.alt}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default transition(Gallery);
