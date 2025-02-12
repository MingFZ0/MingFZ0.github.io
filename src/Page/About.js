import fullImage from "./resources/full_pic.jpg";
import './About.css';

function About() {
    return (
        <div className="About">
            <h2 id="Brand">Aims to Move Hearts</h2>
            <div className="ImgContainer">
                <img src={fullImage} className="AboutBgImg"></img>
                {/* <img src={fullImage} className="AboutBgImgPlacehold"></img> */}
            </div>
            

            <p id="Summary" className="Heading">Dedicated and passionated software engineer that is actively looking for more opportunities to develop experience in
            AI Development, Web Development and Softwate Testing. Seeking internships for summer-fall 2025 and 2026.</p>
            <div style={{display: "relative"}}></div>
        </div>
    )
}

export default About;