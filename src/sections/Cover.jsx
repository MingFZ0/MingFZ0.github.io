import "./Cover.css";
import CoverImg from "../assets/media/full_pic.jpg";
import gitIcon from "../assets/media/icons/github.png";
import linkedInIcon from "../assets/media/icons/linkedinIcon.png";
import pdfIcon from "../assets/media/icons/pdfIcon.png";
import emailIcon from "../assets/media/icons/emailIcon.png";
import ImgButton from "./utility/ImgButton";

function Cover() {
    return (
        <div className="Cover">
            <img src={CoverImg} id="Cover-Img"></img>
            <div id="Cover-Card">
                <div id="Cover-Card-Description">
                    <p>I'm a</p>
                    <h2>Full Stack Developer</h2>
                    <p>Interested in</p>
                    <h3>Web & App Dev.</h3>
                    <h4>Based in NYC</h4>
                </div>
                <div id ="Cover-Contact">
                    <ImgButton href={"mailto:mingfengz1678@gmail.com"} img={emailIcon} />
                    <ImgButton href={"https://github.com/MingFZ0"} img={gitIcon} />
                    <ImgButton href={"https://www.linkedin.com/in/mingfeng-zhong-0b19712a0/"} img={linkedInIcon} />
                    <ImgButton href={"https://mingfz0.github.io/resume/Resume.html"} img={pdfIcon} />
                </div>
            </div>
        </div   >
    )
}

export default Cover;