import { Navbar, NavItem, NavLink, Nav } from "reactstrap";
import { Row, Col, Button} from "reactstrap";

import NavControl from "./components/NavControl/NavControl";
import './Header.css';

function Header(props) {
    return(
        <Navbar className="Header">
            <NavControl text="About" link="#Top"/>
            <NavControl text="Skills" link="#Skills"/>
            <div className="NavControlDiv">
                <h2 color="light" className="Title">Mingfeng Zhong</h2>
                </div>
            <NavControl text="Projects" link="#Projects"/>
            <NavControl text="Contact" link="#Contact"/>
        </Navbar>
    )

}
export default Header;