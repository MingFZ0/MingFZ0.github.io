import { Col, Container, Row } from "reactstrap"
import linkedInImg from "./resources/linkedin.png"
import GithubImg from "./resources/GitHub.png"
import PDFImg from "./resources/pdf_icon.webp"
import Subtitle from "./components/Subtitle/Subtitle";
import './Contact.css';

function Contact() {
    return (
        <div className="Contact" id="Contact">
            <Subtitle text="Contact"/>
            <Row sm="2">
                <Col sm="4">
                    <a href="https://www.linkedin.com/in/mingfeng-zhong-0b19712a0/">
                        <img alt="LinkedIn Icon" src={linkedInImg} width={40} height={40}/>
                    </a>
                    <p>LinkedIn</p>
                </Col>
                <Col sm="3">
                    <a href="https://github.com/MingFZ0">
                        <img alt="GitHub Icon" src={GithubImg} width={40} height={40}/>
                    </a>
                    <p>GitHub</p>
                </Col>
                <Col sm="3">
                    <a href="file://github.com/MingFZ0/ResumeWebPage/blob/8b201313e51d819ecd06f7dac8a2e55981aa9dcf/src/Page/resources/Resume.pdf">
                        <img alt="Resume PDF Icon" src={PDFImg} width={40} height={40}/>
                    </a>
                    <p>Resume</p>
                </Col>
            </Row>
            <Row>
                <p>Contact Me via mingfengz1678@gmail.com</p>
            </Row>
        </div>
    )
}

export default Contact;