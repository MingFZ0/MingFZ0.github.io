import { Children } from "react";
import "./EducationCard.css";

function EducationCard(props) {

    const displayDescription = () => {

        let ls = [];
        props.Description.map((item) => {
            ls.push(
                <p className="ExperienceCard-Description">{item}</p>
            )
        })

        return ls;
    }

    return (
        <div className="EducationCard">
            <img src={props.Img} className="EducationCard-Img"/>
            <div className="EducationCard-Display">
                <h4 className="EducationCard-Date">{props.Date}</h4>
                <h4 className="EducationCard-School">{props.School}</h4>
                <div className="EducationCard-Description-Group">
                    {displayDescription()}
                </div>
            </div>
        </div>
    )
}

export default EducationCard;