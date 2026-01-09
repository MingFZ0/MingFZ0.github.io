import Carousel from "./utility/Carousel";
import "./Technology.css";
import BorderDiv from "./utility/BorderDiv";
import { useState } from "react";

function Technology() {

    const [active, setActive] = useState(false);

    const handleSelect = (e) => {

        if (active == true) {
            setActive(false);
            return;
        }
        
        let technology = document.querySelector(".Technology");
        let myScroll = document.querySelector(".Carousel-Container");
        technology.addEventListener("wheel", (e) => {
            e.preventDefault();
            myScroll.scrollLeft += (e.deltaY * 1.5);
        });
    }

    return (
        <div className="Technology" onClick={handleSelect}>
            <h2 id="Technology-Title">Technology</h2>
            <div className="BorderDiv" />
            <Carousel />
        </div>
    )
}

export default Technology;