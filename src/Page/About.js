import fullImage from "./resources/AboutMe.jpg";

function About() {
    return (
        <div className="About">
            <img src={fullImage} className="AboutBgImg"></img>
            <h2 id="Brand">Aims to Move Hearts</h2>
        </div>
    )
}

export default About;