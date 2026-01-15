import "./Footer.css";
import ImgButton from "./utility/ImgButton";

import gitIcon from "../assets/media/icons/github.png";
import linkedInIcon from "../assets/media/icons/linkedinIcon.png";
import pdfIcon from "../assets/media/icons/pdfIcon.png";
import emailIcon from "../assets/media/icons/emailIcon.png";

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-BorderDiv"/>
            <p>
                © 2026 - Made by Mingfeng Zhong
            </p>
            <div className="Footer-BorderDiv"/>
            <div id="Footer-Contact">
                    <ImgButton href={"mailto:mingfengz1678@gmail.com"} img={emailIcon} />
                    <ImgButton href={"https://github.com/MingFZ0"} img={gitIcon} />
                    <ImgButton href={"https://www.linkedin.com/in/mingfeng-zhong-0b19712a0/"} img={linkedInIcon} />
                    <ImgButton href={"https://mingfz0.github.io/resume/Resume.html"} img={pdfIcon} />
                </div>
        </div>
    )
}

export default Footer;