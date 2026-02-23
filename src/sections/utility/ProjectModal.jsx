import ProjectCard from "./ProjectCard";
import "./ProjectModal.css";

function ProjectModal(props){
    let Projects = props.Projects;

    return (
        <div className="Modal-Overlay" onClick={() => props.ShowModal(false)}>
            <div className="Modal-Content" onClick={(e) => e.stopPropagation()}>
                <button className="Modal-Close" onClick={() => props.ShowModal(false)}>✕</button>
                <h2>All Projects</h2>
                <div className="Projects-Grid">
                    {Projects.map((project) => (
                        <ProjectCard
                            key={project["Title"]}
                            Img={project["Img"]}
                            Title={project["Title"]}
                            Type={project["Type"]}
                            Tech={project["Tech"]}
                            Description={project["Description"]}
                            Github={project["Github"]}
                            Links={project["Links"]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;