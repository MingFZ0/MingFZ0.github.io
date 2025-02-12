import fullImage from "./resources/AboutMe.jpg";
import './About.css';

function About() {
    return (
        <div className="About">
            <img src={fullImage} className="AboutBgImg"></img>
            <h2 id="Brand">Aims to Move Hearts</h2>
            <p id="Summary" className="Heading">Dedicated and passionated software engineer that is actively looking for more opportunities to develop experience in
            AI Development, Web Development and Softwate Testing. Seeking internships for summer-fall 2025 and 2026.</p>
        </div>
    )
}

export default About;