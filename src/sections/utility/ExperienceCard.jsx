import "./ExperienceCard.css";

function ExperienceCard(props) {
    return (
        <div className="ExperienceCard">
            <img src={props.Img} className="ExperienceCard-Img"/>
            <div className="ExperienceCard-Display">
                <h4 className="ExperienceCard-Date">{props.Date}</h4>
                <h4 className="ExperienceCard-Title">{props.Title}</h4>
                <h4 className="ExperienceCard-Company">{props.Company}</h4>
                <p className="ExperienceCard-Description">{props.Description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard;