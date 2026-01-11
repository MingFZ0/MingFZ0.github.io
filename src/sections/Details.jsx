import { useState } from "react";
import "./Details.css";

import ReactIcon from "../assets/media/icons/ReactIcon.png";
import ExperienceCard from "./utility/ExperienceCard";

function Details() {

    const [sections, setSections] = useState(["Experience", "Projects", "Education"]);

    const [shiftUpState, setShiftUpState] = useState(true);
    const [displayIndex, setDisplayIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [prevIndex, setPrevIndex] = useState(sections.length - 1);

    const Experiences = [
        {
            "Img": ReactIcon,
            "Date": "Aug. 2025– Dec. 2025",
            "Title": "Student Mentor",
            "Company": "Society of Software Engineers",
            "Description": "Evaluated student technical levels and tailored technical explanations to encourage the discovery of solutions to problems and course materials"
        }
    ]


    function getIndex(current, increment) {
        let size = sections.length;
        
        if (increment > 0) {
            let next = current + 1;
            if (next > size) {return 0;}
            return next;
        }
        else if (increment < 0) {
            let prev = current - 1;
            if (prev < 0) {return -1;}
            return prev;
        }
    }

    const handleSelect = (index) => {

        if (index > displayIndex) {setShiftUpState(true);}
        else {setShiftUpState(false);}

        setPrevIndex(getIndex(index, -1));
        setNextIndex(getIndex(index, 1));
        setDisplayIndex(index);
    }

    const displaySection = (index) => {
        
        
        return (
            <form id="Details-Sections">
                <div id="Details-Sections-Previous">
                    <input className="Details-Sections-Radio" name="Section" id={prev} value={prev} type="radio" onClick={() => handleSelect(prevIndex)} />
                    <label htmlFor={prev}>{prev}</label>
                </div>
                <div id="Details-Sections-Current">
                    <input className="Details-Sections-Radio" name="Section" id={current} value={current} type="radio" checked/>
                    <label htmlFor={current}>{current}</label>
                    <div className="BorderDiv" />
                </div>
                <div id="Details-Sections-Next">
                    <input className="Details-Sections-Radio" name="Section" id={next} value={next} type="radio" onClick={() => handleSelect(nextIndex)}/>
                    <label htmlFor={next}>{next}</label>
                </div>
            </form>
        )
    }

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
                    key={experience["Title"]}
                />
            )
        })

        return ls;
    }

    const getSectionShiftName = (name) => {
        if (shiftUpState) {
            return ("ShiftUp-" + name);
        } else {
            return ("ShiftDown-" + name);
        }
    }
    
    let current = sections[displayIndex];
    let prev = sections[prevIndex];
    let next = sections[nextIndex];

    console.log(prevIndex, displayIndex, nextIndex);

    return( 
        <div className="Details">
            <form id="Details-Sections" key={current}>
                <div className="Details-Sections-Previous" id={getSectionShiftName("Previous")}>
                    <input className="Details-Sections-Radio" name="Section" id={prev} value={prev} type="radio" onClick={() => handleSelect(prevIndex)} />
                    <label htmlFor={prev}>{prev}</label>
                </div>
                <div className="Details-Sections-Current" id={getSectionShiftName("Current")}>
                    <input className="Details-Sections-Radio" name="Section" id={current} value={current} type="radio" checked/>
                    <label htmlFor={current}>{current}</label>
                    <div className="BorderDiv" />
                </div>
                <div className="Details-Sections-Next" id={getSectionShiftName("Next")}>
                    <input className="Details-Sections-Radio" name="Section" id={next} value={next} type="radio" onClick={() => handleSelect(nextIndex)}/>
                    <label htmlFor={next}>{next}</label>
                </div>
            </form>
            <div id="Details-Cards">
                {displayCards()}
            </div>
        </div>
    )
}

export default Details;