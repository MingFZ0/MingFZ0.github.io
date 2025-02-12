import './Project.css';
import ScrollSlide from './components/ScrollSlide/ScrollSlide';
import Subtitle from './components/Subtitle/Subtitle';

function Projects() {
    return (
        <div className='Projects'>
            <Subtitle text="Projects"/>
            <ScrollSlide/>
        </div>
       
    )
}

export default Projects;