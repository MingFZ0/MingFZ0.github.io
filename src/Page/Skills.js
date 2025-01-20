import { Carousel } from "react-responsive-3d-carousel";
import TextCarousel from "./components/TextCarousel";

function Skills() {
    let skills = [
        'Java',
        'Python',
        'C/C++/C#',
        // 'HTML/CSS/Javascript',
        // 'React',
        // 'Angular',
        // 'PostgreSQL',
        // 'MySql',
        // 'Flask',
        // 'Bootstrap',
        // 'Unity',
        // 'Amazon Web Service (AWS)',
        // 'Apache',
        // 'Modular Design',
        // 'Object Oriented Programming (OOP)',
        // 'Agile Development Process (SCRUM)'
    ]

    return (
        <div className="Skills">
            <TextCarousel data={skills}/>
        </div>
    )
}

export default Skills;