import "./Courses.css";
import CourseCard from "./utility/CourseCard";

function Courses() {

    const courseList = [
        {
            "Title": "Design for Embedded Systems",
            "Subtitle": "SWEN 340"
        }, {
            "Title": "Human Centered Reqs and Design",
            "Subtitle": "SWEN 444"
        }, {
            "Title": "Enterprise SW Systems",
            "Subtitle": "SWEN 343"
        },{
            "Title": "Web Engineering",
            "Subtitle": "SWEN 344"
        },  {
            "Title": "Software Subsystems",
            "Subtitle": "SWEN 262"
        },  {
            "Title": "Introduction to SWE",
            "Subtitle": "SWEN 261"
        }, {
            "Title": "Software Process & Management",
            "Subtitle": "SWEN 256"
        }, {
            "Title": "Introduction to C",
            "Subtitle": "SWEN 250"
        }
    ]

    const displayCourses = () => {
        let ls = [];

        courseList.map((course) => {
            ls.push(
                <CourseCard 
                    Title={course.Title}
                    Subtitle={course.Subtitle}/>
            )
        })

        return ls;
    }

    return (
        <div className="Courses">
            <h2 className="Courses-Header">Relevant Courses</h2>
            <div className="Courses-Header-BorderDiv" />
            <div className="Courses-Display">
                {displayCourses()}
            </div>
        </div>
    )
}

export default Courses;