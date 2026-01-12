import { Children } from "react";
import "./ProjectCard.css";
import ImgButton from "./ImgButton";

import Github from "../../assets/media/icons/github.png";

function ProjectCard(props) {

    const displayTech = () => {
        
    }

    const displayLinks = () => {
        if (props.Github != null) {
            return (
                <ImgButton 
                    href={props.Github}
                    img={Github}/>
            )   
        }
    }

    return (
        <div className="ProjectCard">
            <img className="ProjectCard-Img" src={props.Img}></img>
            <h2 className="ProjectCard-Title">{props.Title}</h2>
            <div className="ProjectCard-Tech-Group">
                {displayTech()}
            </div>
            <p className="ProjectCard-Description">{props.Description}</p>
            <div className="ProjectCard-Links">
                {displayLinks()}
            </div>

        </div>
    )
}

export default ProjectCard;