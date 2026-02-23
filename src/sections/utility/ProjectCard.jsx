import { Children } from "react";
import "./ProjectCard.css";
import ImgButton from "./ImgButton";

import Github from "../../assets/media/icons/github.png";
import ProjectCardTag from "./ProjectCardTag";

function ProjectCard(props) {

    const displayTech = () => {
        let ls = [];
        props.Type.map((value) => {
            ls.push(
                <ProjectCardTag
                    Color="#7cb7bd"
                    Tag={value}/>
            )
        })
        

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
        let ls = [];

        if (props.Github != null) {
            ls.push(
                <ImgButton 
                    href={props.Github}
                    img={Github}/>
            )
        }

        if (props.Links != null) {

            for (let i = 0; i < props.Links.Img.length; i++) {
                console.log(props.Links.Img[i], props.Links.Link[i]);

                ls.push(
                    <ImgButton 
                        img={props.Links.Img[i]}
                        href={props.Links.Link[i]}/>
                );
            }
        }

        ls.push(
            <div style={{marginBottom: "10px"}}></div>
        )

        return ls;

        
    }

    if (props.Img == null) {
        return (
            <div className="ProjectCard" id="Alt-View-All-Projects-Btn">
                <h2>...</h2>
            </div>
        )
    }
    else {
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
    
}

export default ProjectCard;