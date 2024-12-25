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
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <div className="content">
                {/* Title with Word Pull Up Animation */}
                <div className="word-pull-up">
                    {textData.intro.split(" ").map((word, index) => (
                        <span key={index} className="animated-word">
                            {word.split("").map((letter, i) => (
                                <span key={i} className="animated-letter">
                                    {letter}
                                </span>
                            ))}
                            <span className="space">&nbsp;</span>
                        </span>
                    ))}
                </div>

                <p className="description">{textData.description}</p>
                <p className="slogan">
                    I live by the saying, <strong>‘FEAR IS THE ONLY ENEMY’</strong> or in Sanskrit,
                    <strong> ‘भयेवास्ति शत्रुः’ (Bhayebasti Shastru)</strong>, as it reminds me to face challenges with courage and curiosity.
                </p>
                <div className="social-media">
                    <a href={textData.media.Github.url} target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className="social-logo" />
                    </a>
                    <a href={textData.media.Linkedin.url} target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="social-logo" />
                    </a>
                    <a href={textData.media.Instagram.url} target="_blank" rel="noopener noreferrer">
                        <img src={insta} alt="Instagram" className="social-logo" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default transition(Home);
