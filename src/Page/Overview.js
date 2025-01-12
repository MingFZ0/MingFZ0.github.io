import { useState } from 'react';
import '../App.css';
import CarouselObj from './CarouselObj';
import './Page.css';

function Overview(props) {
   
    return (
        <div>
            <h1 className='Heading' style={{color: props.theme.h2}}>Overview</h1>
            <div className='Underline' style={{borderBottom: "2px solid " + props.theme.underlineHeavy}}></div>
            <CarouselObj/>
            <p className='TextDescription' style={{color: props.theme.text}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. 
            </p>
            
        </div>
    );
}

export default Overview;