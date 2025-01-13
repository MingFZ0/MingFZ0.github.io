import { Button } from "reactstrap";

function NavControl(props) {
    return (
        <div className="NavControlDiv">
            <a color="light" className="NavControlButton">{props.text}</a>
        </div>
    )
}

export default NavControl;