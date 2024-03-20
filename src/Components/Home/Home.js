import './Home.css';
import profilePic from './professional.jpg';
import textData from '../../textData';

function Home() {
    return (
        <div className="Home">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <div className="content">
                <h2 className="intro">{textData.intro}</h2>
                <p className="description">{textData.description}</p>
                <div className="social-media">
                    {Object.entries(textData.media).map(([platform, link]) => (
                        <a key={platform} href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                            {platform}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;

export { textData };
