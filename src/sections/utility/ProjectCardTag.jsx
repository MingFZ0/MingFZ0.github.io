import "./ProjectCardTag.css";

function ProjectCardTag(props) {
    return(
        <div className="ProjectCardTag" style={{backgroundColor: props.Color}}>
            <p className="ProjectCardTag-Name">{props.Tag}</p>
        </div>
    )
}

export default ProjectCardTag;