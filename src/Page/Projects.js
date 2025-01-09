import '../App.css';
import './Page.css';

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-3d-carousel'
import 'react-responsive-3d-carousel/dist/styles.css'
import img1 from "./resources/image1.jpg";
import ScrollSlide from './ScrollSlide';

const items = [
    <div>
        <img src={img1} alt="image1" />
    </div>,
    
    <video src="video1.mp4" autoPlay />,
    <div>Content 3</div>,
]

const layoutPreset = {
    'default' : {
        width: '50%', height: '300px',
        translate: {x:0, y:0, z:0.4},
        rotate: {x:0, y:0, z:0},
        offset: {x:0, y:0, z:0}, 
      },
    0: {
        width: '50%', height: '300px',
        translate: {x:0, y:0, z:0.2},
        rotate: {x:0, y:0, z:0},
        offset: {x:0.2, y:0, z:0},
      },
    1: {
        width: '50%', height: '300px',
        translate: {x:0, y:0, z:0.2},
        rotate: {x:0, y:0, z:0},
        offset: {x:-0.1, y:0, z:0},
    }
  }

function Projects() {
    return (
        <div>
            <h1 className='Heading'>Projects</h1>
            <div className='Underline'></div>
            <ScrollSlide/>
            <p className='TextDescription'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. 
            </p>
            
        </div>
    );
}

export default Projects;