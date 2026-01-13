import { Children } from "react";
import "./ProjectCard.css";
import ImgButton from "./ImgButton";

import Github from "../../assets/media/icons/github.png";
import ProjectCardTag from "./ProjectCardTag";

function ProjectCard(props) {

    const displayTech = () => {
        let ls = [];
        ls.push(
            <ProjectCardTag
                Color="#7cb7bd"
                Tag={props.Type}/>
        )

        props.Tech.map((value) => {
            ls.push(
                <ProjectCardTag
                    Color="#bbbebf"
                    Tag={value}/>
            )
        })

        return ls;
    }

    const displayLinks = () => {
        if (props.Github != null) {
            return (
                <ImgButton 
                    href={props.Github}
                    img={Github}/>
            )   
        } else {
            return (
                <div style={{marginBottom: "10px"}}></div>
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