import ItemPanel from "./ItemPanel";
import "./Carousel.css";

import { useEffect, useState } from "react";

import ReactIcon from "../../assets/media/icons/ReactIcon.png";
import Angular from "../../assets/media/icons/angular.png";
import Node from "../../assets/media/icons/node.png";

import C from "../../assets/media/icons/c.png";
import CPlusPlus from "../../assets/media/icons/cplusplus.png";
import CSharp from "../../assets/media/icons/csharp.png";

import HTMLI from "../../assets/media/icons/html.png";
import CSSI from "../../assets/media/icons/css.png";
import Javascript from "../../assets/media/icons/javascript.png";

import Java from "../../assets/media/icons/java.png";
import Python from "../../assets/media/icons/python.png";

import Git from "../../assets/media/icons/git.png";

import Mongodb from "../../assets/media/icons/mongodb.png";
import Postgres from "../../assets/media/icons/postgres.png";

import SprintBoot from "../../assets/media/icons/springBoot.png";
import Unity from "../../assets/media/icons/unity.png";

import Penpot from "../../assets/media/icons/penpot.png";
import Figma from "../../assets/media/icons/figma.png";



function Carousel(props) {

    return (
        <div className="Carousel">
            <div className="Carousel-Container">
                <ItemPanel name="Java" img={Java}/>
                <ItemPanel name="Python" img={Python}/>       
                <ItemPanel name="React" img={ReactIcon}/>
                <ItemPanel name="Angular" img={Angular}/>
                <ItemPanel name="Node" img={Node}/>
                <ItemPanel name="HTML" img={HTMLI}/>
                <ItemPanel name="CSS" img={CSSI}/>
                <ItemPanel name="Javascript" img={Javascript}/>
                <ItemPanel name="C" img={C}/>
                <ItemPanel name="C++" img={CPlusPlus}/>
                <ItemPanel name="C#" img={CSharp}/>
                <ItemPanel name="Git" img={Git}/>
                <ItemPanel name="MongoDB" img={Mongodb}/>
                <ItemPanel name="PostgreSQL" img={Postgres}/>
                <ItemPanel name="SprintBoot" img={SprintBoot}/>
                <ItemPanel name="Unity" img={Unity}/>
                <ItemPanel name="Penpot" img={Penpot}/>
                <ItemPanel name="Figma" img={Figma}/>
            </div> 
            <div className="Carousel-Scroller">
                
            </div>           
        </div>
    )
}

export default Carousel;