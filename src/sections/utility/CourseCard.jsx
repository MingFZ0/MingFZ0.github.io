import "./CourseCard.css";

function CourseCard(props) {
    return (
        <div className="CourseCard">
            <h4 className="CourseCard-Subtitle">{props.Subtitle}</h4>
            <h3 className="CourseCard-Title">{props.Title}</h3>
        </div>
    )
}

export default CourseCard;