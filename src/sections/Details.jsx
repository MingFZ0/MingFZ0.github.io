import { useState } from "react";
import "./Details-1.css";
import "./Details-2.css";



import SSE from "../assets/media/icons/company/sse.png";
import mw from "../assets/media/icons/company/mwscience.png";

import mediaPlayer from "../assets/media/screenshots/embedded.png";
import pharma from "../assets/media/screenshots/pharma.png";
import uFund from "../assets/media/screenshots/uFund.png";
import nutrition from "../assets/media/screenshots/nutrition.png";
import eater from "../assets/media/screenshots/eater.png";
import comboTutorial from "../assets/media/screenshots/comboTutorial.png";

import rit from "../assets/media/icons/company/rit.png";
import midwood from "../assets/media/icons/company/midwood.png";

import ExperienceCard from "./utility/ExperienceCard";
import ProjectCard from "./utility/ProjectCard";
import EducationCard from "./utility/EducationCard";

function Details() {

    const [sections, setSections] = useState(["Experience", "Projects", "Education"]);

    const [shiftUpState, setShiftUpState] = useState(true);
    const [displayIndex, setDisplayIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [prevIndex, setPrevIndex] = useState(sections.length - 1);

    const Experiences = [
        {
            "Img": SSE,
            "Date": "Aug. 2025– Dec. 2025",
            "Title": "Student Mentor",
            "Company": "Society of Software Engineers",
            "Description": "Evaluated student technical levels and tailored technical explanations to encourage the discovery of solutions to problems and course materials"
        },
        {
            "Img": mw,
            "Date": "Apr. 2022 – Apr. 2023",
            "Title": "Online Research Programmer",
            "Company": "Midwood Science at Midwood High School",
            "Description": "Created and deployed web-apps using Apache2 on AWS for high school students for research projects"
        }
    ]

    const Projects = [
        {
            "Img": mediaPlayer,
            "Github": "https://github.com/MingFZ0/MIDI-Embedded-Player",
            "Title": "Embedded MIDI Music Player",
            "Type": "Embedded",
            "Tech": ["C"],
            "Description": "Recreated a fully functioning MIDI music player on an ARM Cortex Microcontroller using C with extremely accurate tone precision"
        }, {
            "Img": pharma,
            "Github": "https://github.com/MingFZ0/Management-Portal",
            "Title": "Pharmaceutical Employee Portal",
            "Type": "Full Stack",
            "Tech": ["React.js", "MongoDB", "Deployment"],
            "Description": "Develop an enterprise-scale full-stack React app to mimic the internal operation management of a medical company"
        }, {
            "Img": nutrition,
            "Github": "https://github.com/MingFZ0/NutritionApp",
            "Title": "Nutrition App",
            "Type": "Full Stack",
            "Tech": ["Java", "Sprint Boot"],
            "Description": "Java terminal-based application used to manage daily nutrition intake and workout"
        }, {
            "Img": uFund,
            "Title": "U-Fund: Save The Bees",
            "Type": "Full Stack",
            "Tech": ["Angular", "Java", "Sprint Boot"],
            "Description": "Charity website in which organizations can use to create and host events to promote bee preservation"
        }, {
            "Img": eater,
            "Github": "https://github.com/MingFZ0/Eater-Unity",
            "Title": "Eater",
            "Type": "Full Stack",
            "Tech": ["C#", "Unity"],
            "Description": "A strategic survival card-game that scores the player based on the cards that are scored and played"
        }, {
            "Img": comboTutorial,
            "Github": "https://github.com/MingFZ0/ComboTutorial",
            "Title": "Combo Tutorial",
            "Type": "Full Stack",
            "Tech": ["C#", "Unity"],
            "Description": "Proof of concept fighting game that utilizes a data-driven system to implement character attacks and movesets"
        }
    ]

    const Education = [
        {
            "Img": rit,
            "Date": "Aug. 2023 - May 2028",
            "School": "Rochester Institute of Technology",
            "Description": ["GPA: 3.25/4.0", "Major: Software Engineer B.S", "Minor: Game Design and Development"]
        },
        {
            "Img": midwood,
            "Date": "Sep. 2019 - Jun. 2023",
            "School": "Midwood High School",
            "Description": ["GPA: 4.0/4.0"]
        }
    ]

    let current = sections[displayIndex];
    let prev = sections[prevIndex];
    let next = sections[nextIndex];

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
        
        if (current == "Experience") {
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
        }
        else if (current == "Projects") {
            Projects.map((project) => {
                ls.push(
                    <ProjectCard
                        Img={project["Img"]}
                        Title={project["Title"]}
                        Type={project["Type"]}
                        Tech={project["Tech"]}
                        Description={project["Description"]}
                        Github={project["Github"]}
                    />
                )
            })
        }
        else if (current == "Education") {
            Education.map((edu) => {
                ls.push(
                    <EducationCard
                        Img={edu["Img"]}
                        Date={edu["Date"]}
                        School={edu["School"]}
                        Description={edu["Description"]}
                    />
                )
            })
        }

        return ls;
        
    }

    const getSectionShiftName = (name) => {
        if (shiftUpState) {
            return ("ShiftUp-" + name);
        } else {
            return ("ShiftDown-" + name);
        }
    }

    console.log(prevIndex, displayIndex, nextIndex);

    return( 
        <div className="Details" id="Details">
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
            <div id="Details-Cards-Group">
                <div id="Details-Cards">
                    {displayCards()}
                </div>
                <div id="Details-Cards-Background"></div>
            </div>
        </div>
    )
}

export default Details;