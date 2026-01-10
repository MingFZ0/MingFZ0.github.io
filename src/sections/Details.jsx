import { useState } from "react";
import "./Details.css";

function Details() {

    const [displayIndex, setDisplayIndex] = useState(0);

    const sections = ["Experience", "Projects", "Education"];

    function getIndex(increment) {
        let size = sections.length;
        if (increment > 0) {
            let next = displayIndex + 1;
            if (next > size) {return 0;}
            return next;
        }
        else if (increment < 0) {
            let prev = displayIndex - 1;
            if (prev < 0) {return size - 1;}
            return prev;
        }
    }

    const displaySection = () => {
        let prev = sections[(getIndex(-1))];
        let current = sections[displayIndex];
        let next = sections[(getIndex(1))];

        return (
            <div id="Details-Sections">
                
            </div>
        )
        
    }

    return( 
        <div className="Details">
            <div id="Details-Sections">
                <div id="Details-Sections-Previous">
                    <h4>Education</h4>
                </div>
                <div id="Details-Sections-Current">
                    <h2>Experience</h2>
                    <div className="BorderDiv" />
                </div>
                <div id="Details-Sections-Next">
                    <h3>Projects</h3>
                </div>
            </div>
            <div id="Details-Cards">

            </div>
        </div>
    )
}

export default Details;