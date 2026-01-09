import "./ImgButton.css";

function ImgButton(props) {

    return (
        <a className="ImgButton" href={props.href}>
            <img src={props.img}></img>
        </a>
    )
}

export default ImgButton;