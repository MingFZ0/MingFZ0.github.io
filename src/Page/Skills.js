import { Carousel } from "react-responsive-3d-carousel";
import TextCarousel from "./components/TextCarousel";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { useState } from "react";
import "./SkillsScroll.css";
import "./Skills.css";

function Skills() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let skills = [
        'Java',
        'Python',
        'C/C++/C#',
        'HTML/CSS/Javascript',
        'React',
        'Angular',
        'PostgreSQL',
        'MySql',
        'Flask',
        'Bootstrap',
        'Unity',
        'Amazon Web Service (AWS)',
        'Apache',
        'Modular Design',
        'Object Oriented Programming (OOP)',
        'Agile Development Process (SCRUM)'
    ]

    let displaySkills = () => { 
        let arr = []
        for (let index = 0; index < skills.length; index++) {
            let skill = skills[index];
            let p = <li>{skill}</li>;
            arr.push(p)
            
        }
        return arr;
    }

    return (
        <div className="Skills">

            <div className="marquee">
                <ul class="marquee__content">
                    {displaySkills()}
                </ul>
                <ul class="marquee__content">
                    {displaySkills()}
                </ul>
            </div>
        </div>
    )
}

export default Skills;