import React, { useContext } from 'react'
import { useState } from 'react';
import { Form, Label, Input, FormGroup, Row, Col } from 'reactstrap'
import GallaryCard from './GallaryCard';

import UFundImg from "../../resources/UFund.png";
import NutritKit from "../../resources/NutriKit.png";
import ComboTutorialImg from "../../resources/ComboTutorial.png";
import JATOSIMG from "../../resources/JATOS.png";
import "./ScrollSlide.css";

function ScrollSlide() {
  const [Index, SetIndex] = useState({
    CurrentIndex: 0,
    SlideDir: "AnimeSlideRight"
  });
  const ItemsArr = [
    [
      UFundImg,
      "Alt For Image",
      "Worked in a team of 5 to create a fullstack charity website using Java, Sprint Boot and Angular to promote bee preservation and protections. Followed an agile development process and delivered the final product across in sprints. Utilized JaCoCo to conduct in-depth code covereage analysis and code review."
      ],
    [
      NutritKit,
      "An image of a nutrient-tracking web app",
      "A fullstack React web application that helps managing food items and viewing/ tracking nutritional information. Utilized PostgresSQL for data storage and Flask to create a REST API to communicate between frontend and backend. "
      ],
    [
      ComboTutorialImg,
      "A screenshot of an unity project containing sprites from Dragon Ball Z",
      "A experimental unity project that attempts to recreate the game Dragon Ball Z: Extreme Butōden. First implementation of software design patterns into game development to achieve object modularization within the code architecture. Created custom inspector code to import and export complex data structures into Unity's scriptable objects at runtime."
      ],
    [
      JATOSIMG,
      "A screenshot of a questionaire with a video player on the left",
      "A multi-part questionaire that focuses on exploring the effects of fiction and nonfiction storytelling on the impact of recycling. Utilized Just Another Tool For Online Studies (JATOS) for user management and Apache to run the site on a proxy configuration on Amazon Web Services to achieve encryption. This was the lead project out of three developed in the Science Research Team at Midwood Highschool for interactive surveys and experiments for high school students."
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