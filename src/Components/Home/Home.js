import './Home.css';
import profilePic from './professional.jpg';
import textData from '../../textData';
import transition from '../../transition';
import insta from '../asset/instagram.png'
import linkedin from '../asset/LinkedIN.png'
import github from '../asset/github.png'




function Home() {
    return (
        <div className="Home">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <div className="content">
                <h2 className="intro">{textData.intro}</h2>
                <p className="description">{textData.description}</p>
                <div className="social-media">
                    <a href={textData.media.Github.url} target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" />
                    </a>
                    <span className="username">{textData.media.Github.username}</span>
                    <br />
                    <a href={textData.media.Linkedin.url} target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <span className="username">{textData.media.Linkedin.username}</span>
                    <br />
                    <a href={textData.media.Instagram.url} target="_blank" rel="noopener noreferrer">
                        <img src={insta} alt="Instagram" />
                    </a>
                    <span className="username">{textData.media.Instagram.username}</span>
                </div>
            </div>
        </div>
    );
}

export default transition(Home);