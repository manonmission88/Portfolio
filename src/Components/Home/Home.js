import React from "react";
import "./Home.css";
import profilePic from "./professional.jpg";
import textData from "../../textData";
import transition from "../../transition";
import insta from "../asset/instagram.png";
import linkedin from "../asset/LinkedIN.png";
import github from "../asset/github.png";

function Home() {
    return (
        <div className="Home">
            {/* Left column — profile */}
            <div className="profile-side">
                <div className="profile-pic-wrapper">
                    <img src={profilePic} alt="Manish Niure" className="profile-pic" />
                </div>

                <div className="status-badge">
                    <span className="status-dot" />
                    Open to opportunities
                </div>

                <div className="social-media">
                    <a href={textData.media.Github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <img src={github} alt="GitHub" className="social-logo" />
                    </a>
                    <a href={textData.media.Linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <img src={linkedin} alt="LinkedIn" className="social-logo" />
                    </a>
                    <a href={textData.media.Instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src={insta} alt="Instagram" className="social-logo" />
                    </a>
                </div>
            </div>

            {/* Right column — content */}
            <div className="content">
                <div className="word-pull-up">
                    {textData.intro.split(" ").map((word, index) => (
                        <span key={index} className="animated-word">
                            {word.split("").map((letter, i) => (
                                <span key={i} className="animated-letter">{letter}</span>
                            ))}
                            <span className="space">&nbsp;</span>
                        </span>
                    ))}
                </div>

                <div className="subtitle-tags">
                    <span className="subtitle-tag tag-blue">Software Engineer</span>
                    <span className="subtitle-tag tag-cyan">MS CS @ Texas A&amp;M</span>
                    <span className="subtitle-tag tag-green">College Station, TX</span>
                    <span className="subtitle-tag tag-pink">ML &amp; Computer Vision</span>
                </div>

                <p className="description" dangerouslySetInnerHTML={{ __html: textData.description }} />

                <p className="slogan">
                    I live by the saying, <strong>'FEAR IS THE ONLY ENEMY'</strong> — or in Sanskrit,{" "}
                    <strong>'भयेवास्ति शत्रुः' (Bhayebasti Shastru)</strong>. It reminds me to face every
                    challenge with courage and curiosity.
                </p>
            </div>
        </div>
    );
}

export default transition(Home);
