import "./Subtitle.css";

function Subtitle(props) {
    return (
        <div className="Subtitle">
            <p color="light" className="SubtitleText">{props.text}</p>
            <div className="SubtitleUnderline">{props.text}</div>
        </div>
    )
}

export default Subtitle;