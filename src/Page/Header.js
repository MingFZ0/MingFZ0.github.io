import { Navbar, NavItem, NavLink, Nav } from "reactstrap";
import { Row, Col, Button} from "reactstrap";

import NavControl from "./components/NavControl";
import './Header.css';

function Header(props) {
    return(
        <Navbar className="Header" sticky="top" style={{backgroundColor: props.theme.background}}>
            <Row className="NavRow">
                <Col>
                    <NavControl text="About"/>
                    </Col>
                <Col>
                    <NavControl text="Skills"/>
                    </Col>
                <Col sm="5">
                    <div className="NavControlDiv">
                        <h2 color="light" className="NavControlButton Title">Mingfeng Zhong</h2>
                        </div>
                    </Col>
                <Col>
                    <NavControl text="Projects"/>
                    </Col>
                <Col>
                    <NavControl text="Contact"/>
                    </Col>
            </Row>
        </Navbar>
    )

}
export default Header;