import "./NavControl.css";

function NavControl(props) {
    return (
        <div className="NavControlDiv">
            <a color="light" className="NavControlButton" href={props.link}>{props.text}</a>
        </div>
    )
}

export default NavControl;