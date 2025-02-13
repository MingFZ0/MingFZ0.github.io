import { Carousel } from "react-responsive-3d-carousel";

function TextCarousel(props) {

    const layoutPreset = {
        'default' : {
          width: '10%', height: '20px',
          translate: {x:0.5, y:0, z:0},
          rotate: {x:0, y:0, z:0},
          offset: {x:1, y:0, z:0}, 
            }
        }

    let skillsDisplay = props.data.map((skill) => {
        // console.log(skill)
        return <p>{skill}</p>
    })
    
    console.log(skillsDisplay)

    return (
        <div className="TextCarousel">
            <Carousel items={skillsDisplay} containerWidth='50%' /> 
        </div>
        )
}

export default TextCarousel;