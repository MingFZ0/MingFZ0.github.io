import { Navbar, NavItem, NavLink, Nav } from "reactstrap";
import { Row, Col, Button} from "reactstrap";

import NavControl from "./components/NavControl/NavControl";
import './Header.css';

function Header(props) {
    return(
        <Navbar className="Header">
           
            <Row className="NavRow">
                <Col xm="1">
                    <NavControl text="About" link="#Top"/>
                    </Col>
                <Col xm="1">
                    <NavControl text="Skills" link="#Skills"/>
                    </Col>
                <Col sm="5">
                    <div className="NavControlDiv">
                        <h2 color="light" className="Title">Mingfeng Zhong</h2>
                        </div>
                    </Col>
                <Col xm="1">
                    <NavControl text="Projects" link="#Projects"/>
                    </Col>
                <Col xm="1">
                    <NavControl text="Contact" link="#Contact"/>
                    </Col>
            </Row>
        </Navbar>
    )

}
export default Header;