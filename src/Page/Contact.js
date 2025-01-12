import { Col, Container, Row } from "reactstrap"
import linkedInImg from "./resources/linkedin.png"
import GithubImg from "./resources/GitHub.png"

function Contact(props) {
    return(
        <div className="Contact">
            <Row sm="2">
                <Col sm="4">
                    <a href="https://www.linkedin.com/in/mingfeng-zhong-0b19712a0/">
                        <img alt="LinkedIn" src={linkedInImg} width={40} height={40}/>
                    </a>
                    <p style={{color: props.theme.h2}}>LinkedIn</p>
                </Col>
                <Col sm="3">
                    <a href="https://github.com/MingFZ0">
                        <img alt="GitHub" src={GithubImg} width={40} height={40}/>
                    </a>
                    <p style={{color: props.theme.h2}}>GitHub</p>
                </Col>
                <Col sm="4">
                    <p style={{color: props.theme.h2}}>Contact Me via mingfengz1678@gmail.com</p>
                </Col>
            </Row>
        </div>
    )
}

export default Contact