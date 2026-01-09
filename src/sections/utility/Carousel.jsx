import ItemPanel from "./ItemPanel";
import "./Carousel.css";

import ReactIcon from "../../assets/media/icons/ReactIcon.png";
import { useEffect, useState } from "react";
import { tr } from "motion/react-client";


function Carousel(props) {

    // const [active, setActive] = useState(false);
    // const [scrollPos, setScrollPos] = useState(0);
    // const [prevPos, setPrevPos] = useState(0);

    // const handleSelect = (e) => {

    //     if (active == true) {
    //         setActive(false);
    //         return;
    //     }
    //     const y = window.scrollY;
    //     setPrevPos(y);
    //     setActive(true);
    //     console.log("Pos: " + y);
        
    //     let myScroll = document.querySelector(".Carousel-Container");
    //     myScroll.addEventListener("wheel", (e) => {
    //         e.preventDefault();
    //         myScroll.scrollLeft += (e.deltaY * 2);
    //     });
    // }

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