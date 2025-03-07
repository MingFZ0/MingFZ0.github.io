import { Carousel } from "react-responsive-3d-carousel";
import TextCarousel from "./components/TextCarousel";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { useState } from "react";
import Subtitle from "./components/Subtitle/Subtitle";

// import "./SkillsScroll.css";
import "./Skills.css";

function Skills() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let skills = [
        'Java',
        'Python',
        'C/C++/C#',
        'React',
        'SQL'
    ]

    let displaySkills = () => { 
        let arr = []
        for (let index = 0; index < skills.length; index++) {
            let skill = skills[index];
            let p = <li className="Skill">{skill}</li>;
            arr.push(p)
            
        }
        return arr;
    }

    return (
        <div className="Skills" id="Skills">
            <Subtitle text="Skills"/>
            <ul class="SkillList">
                {displaySkills()}
            </ul>
        </div>
    )
}

export default Skills;