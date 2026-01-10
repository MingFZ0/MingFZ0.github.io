import { useState } from "react";
import "./Details.css";

import ReactIcon from "../assets/media/icons/ReactIcon.png";
import ExperienceCard from "./utility/ExperienceCard";

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
            <form id="Details-Sections">
                <div id="Details-Sections-Previous">
                    <input className="Details-Sections-Radio" name="Section" id={prev} value={prev} type="radio" />
                    <label htmlFor={prev}>{prev}</label>
                </div>
                <div id="Details-Sections-Current">
                    <input className="Details-Sections-Radio" name="Section" id={current} value={current} type="radio" />
                    <label htmlFor={current}>{current}</label>
                    <div className="BorderDiv" />
                </div>
                <div id="Details-Sections-Next">
                    <input className="Details-Sections-Radio" name="Section" id={next} value={next} type="radio" />
                    <label htmlFor={next}>{next}</label>
                </div>
            </form>
        )
    }

    const Experiences = [
        {
            "Img": ReactIcon,
            "Date": "Aug. 2025– Dec. 2025",
            "Title": "Student Mentor",
            "Company": "Society of Software Engineers",
            "Description": "Evaluated student technical levels and tailored technical explanations to encourage the discovery of solutions to problems and course materials"
        }
    ]

    const displayCards = () => {

        let ls = [];
        
        Experiences.map((experience) => {
            ls.push(
                <ExperienceCard 
                    Img={experience["Img"]} 
                    Date={experience["Date"]}
                    Title={experience["Title"]}
                    Company={experience["Company"]}
                    Description={experience["Description"]}
                />
            )
        })

        return ls;
    }


    return( 
        <div className="Details">
            {displaySection()}
            <div id="Details-Cards">
                {displayCards()}
            </div>
        </div>
    )
}

export default Details;