import ItemPanel from "./ItemPanel";
import "./Carousel.css";

import ReactIcon from "../../assets/media/icons/ReactIcon.png";


function Carousel(props) {

    const items = props.items;

    let displayPanels = () => {
        for (let index = 0; index < items.length; index++) {
            let item = items[index];
            let img = item["img"];
            let name = item["name"];
        }
    }

    return (
        <div className="Carousel">
            <div className="Carousel-Container">
                <ItemPanel name="React" img={ReactIcon}/>
                <ItemPanel name="React" img={ReactIcon}/>
                <ItemPanel name="React" img={ReactIcon}/>
                <ItemPanel name="React" img={ReactIcon}/>
                <ItemPanel name="React" img={ReactIcon}/>
                <ItemPanel name="React" img={ReactIcon}/>
                <ItemPanel name="React" img={ReactIcon}/>
                <ItemPanel name="React" img={ReactIcon}/>
                <ItemPanel name="React" img={ReactIcon}/>
                <ItemPanel name="React" img={ReactIcon}/>
                <ItemPanel name="React" img={ReactIcon}/>
            </div> 
            <div className="Carousel-Scroller">
                
            </div>           
        </div>
    )
}

export default Carousel;