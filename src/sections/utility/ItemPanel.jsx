import "./ItemPanel.css";

function ItemPanel(props) {
    return (
        <div className="ItemPanel">
            <img src={props.img}></img>
            <p>{props.name}</p>
        </div>
    )
}

export default ItemPanel;