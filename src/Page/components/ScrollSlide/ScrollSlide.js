import React, { useContext } from 'react'
import { useState } from 'react';
import { Form, Label, Input, FormGroup, Row, Col } from 'reactstrap'
import GallaryCard from './GallaryCard';

import img1 from "../../resources/image1.jpg";
import img2 from "../../resources/image2.png";
import fullImage from "../../resources/fullImage.png";
import "./ScrollSlide.css";

function ScrollSlide() {
  const [Index, SetIndex] = useState({
    CurrentIndex: 0,
    SlideDir: "AnimeSlideRight"
  });
  const ItemsArr = [
    [
      img1,
      "Alt For Image",
      "Text Description"
      ],
    [
      img2,
      "Alt For Image",
      "Text Description2"
      ],
    [
      fullImage,
      "Alt For Image",
      "Text Description3"
    ]
]

  const Items = () => {
      let CardsArry = [];
      let i = 0;
      for (const item of ItemsArr) {
        let prevIndex = i-1;
        let nextIndex = i+1;

        if (nextIndex >= ItemsArr.length) {nextIndex = 0;}
        if (prevIndex < 0) {prevIndex = ItemsArr.length-1;}

        let card = (
          <GallaryCard img={item[0]} text={item[2]} imgAlt={item[1]} 
          prevIndex={prevIndex} nextIndex={nextIndex} slideDir={Index.SlideDir}
          onIndexChange={(index, slideDir) => {SetIndex({CurrentIndex:index, SlideDir:slideDir})}}/>
        );
        
        // console.log(item);
        CardsArry.push(card);
        i++;
      }

      // console.log(CardsArry[0][0]);
      return CardsArry[Index.CurrentIndex];
  }

  const Radios = () => {
    let RadioArry = [];

    for (const index in ItemsArr) {
      let radio;
      
      if (index == Index.CurrentIndex) {
        radio = (
          <input type='radio' className='ScrollSlideRadio' name='ScrollSlideRadio' checked={true} 
          key={index} onClick={() => SetIndex({CurrentIndex:index, SlideDir:"AnimeSlideDown"})}></input>
        );
        console.log(index);
      }
      else {
        radio = (
          <input type='radio' className='ScrollSlideRadio' name='ScrollSlideRadio' 
          key={index} onClick={() => SetIndex({CurrentIndex:index, SlideDir:"AnimeSlideDown"})}></input>
        );
      }
      
      
      RadioArry.push(radio);
    }

    return RadioArry;
  }

  return (
    <div className="ScrollSlide">
      <div>
        {Items()}
      </div>
      <div className='ScrollSlideControl'>
        {Radios()}
      </div>
    </div>
  )
}

export default ScrollSlide