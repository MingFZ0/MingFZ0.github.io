import React, { useContext } from 'react'
import { useState } from 'react';
import { Form, Label, Input, FormGroup, Row, Container, Col, Button } from 'reactstrap'

import RightArr from "../../resources/Right.svg";
import LeftArr from "../../resources/Left.svg";
import "./GallaryCard.css";


function GallaryCard(props) {
    let img = props.img;
    let imgAlt = props.imgAlt;
    let text = props.text;
    let prevIndex = props.prevIndex;
    let nextIndex = props.nextIndex;
    let slideDir = props.slideDir;
    let url = props.url;
    if (url != null)
        return (
            <Container className='GallaryCard' key={Math.random()}>
                <Row>
                    <Col sm="1">
                    <button className='GallaryCardButton' onClickCapture={() => 
                        props.onIndexChange(prevIndex, "AnimeSlideLeft")}>
                            <img src={LeftArr} width={50} height={50}></img>
                        </button>
                    </Col>
                    <Col sm={4} className={'GallaryCardImg ' + slideDir}>
                        <img src={img} alt={imgAlt} width={"100%"} height={"300px"}/>
                        </Col>
                    <Col className={'GallaryCardDescription '+ slideDir}>
                        <p>{text}</p>
                        <a href={url}>Visit Site</a>
                        </Col>
                    <Col sm="1">
                        <button className='GallaryCardButton' onClickCapture={() => {
                            props.onIndexChange(nextIndex, "AnimeSlideRight");}}>
                            <img src={RightArr} width={50} height={50}></img>
                        </button>
                    </Col>
                </Row>
                
            </Container>
    )
    else 
        return (
            <Container className='GallaryCard' key={Math.random()}>
                <Row>
                    <Col sm="1">
                    <button className='GallaryCardButton' onClickCapture={() => 
                        props.onIndexChange(prevIndex, "AnimeSlideLeft")}>
                            <img src={LeftArr} width={50} height={50}></img>
                        </button>
                    </Col>
                    <Col sm={4} className={'GallaryCardImg ' + slideDir}>
                        <img src={img} alt={imgAlt} width={"100%"} height={"300px"}/>
                        </Col>
                    <Col className={'GallaryCardDescription '+ slideDir}>
                        <p>{text}</p>
                        </Col>
                    <Col sm="1">
                        <button className='GallaryCardButton' onClickCapture={() => {
                            props.onIndexChange(nextIndex, "AnimeSlideRight");}}>
                            <img src={RightArr} width={50} height={50}></img>
                        </button>
                    </Col>
                </Row>
                
            </Container>
    )
}

export default GallaryCard