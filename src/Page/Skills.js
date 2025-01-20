import { Carousel } from "react-responsive-3d-carousel";
import TextCarousel from "./components/TextCarousel";
import "./Skills.css";

function Skills() {
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

    // let displaySkills = skills.map((skill) => {
    //     let animationTime = 10 / skills.length * (skill.length - 1)
    //     return <p className="Skill" style={{animationDelay: {animationTime}}}>{skill}</p>
    //     })
    let displaySkills = () => { 
        let arr = []
        for (let index = 0; index < skills.length; index++) {
            let animationTime = index * 3;
            let skill = skills[index];
            let p = <p className="Skill" style={{animationDelay: animationTime + 's'}}>{skill}</p>;
            arr.push(p)
            
        }
        return arr;
        }

    return (
        <div className="SkillsContainer">
            {displaySkills()}
        </div>
    )
}

export default Skills;