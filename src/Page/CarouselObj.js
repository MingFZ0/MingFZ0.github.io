import React from 'react'
import { Carousel } from 'react-responsive-3d-carousel'
import 'react-responsive-3d-carousel/dist/styles.css'
import img1 from "./resources/image1.jpg";

const items = [
  <img src={img1} alt="image1" />,
  <video src="video1.mp4" autoPlay />,
  <div>Content 3</div>,
]

const layoutPreset = {
  'default' : {
    width: '200px', height: '300px',
    translate: {x:0, y:0, z:0.4},
    rotate: {x:0, y:0, z:0},
    offset: {x:0, y:0, z:0}, 
    },
  0: {
    width: '200px', height: '300px',
    translate: {x:0.3, y:0, z:0.2},
    rotate: {x:0, y:0, z:0},
    offset: {x:-0.8, y:0, z:0},
    },
  1: {
      width: '200px', height: '300px',
      translate: {x:-0.3, y:0, z:0.2},
      rotate: {x:0, y:0, z:0},
      offset: {x:0.8, y:0, z:0},
  }
}

function CarouselObj() {
  return (
    <div style={{marginTop: "-15px"}}>
      <Carousel
        items={items}
        startIndex={0}
        onChange={(currentIndex) => console.log("Current Index is: " + currentIndex)}
        height={"540px"}
        layout={layoutPreset}
        aspectRatio={0.5}
        showStatus={false}
        />
      </div>
  )
}

export default CarouselObj