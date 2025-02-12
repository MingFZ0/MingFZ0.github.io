import React, { useContext } from 'react'
import { useState } from 'react';
import { Form, Label, Input, FormGroup, Row, Container, Col, Button } from 'reactstrap'

import RightArr from "../../resources/Right.svg";
import LeftArr from "../../resources/Left.svg";

function GallaryCard(props) {
    let img = props.img;
    let imgAlt = props.imgAlt;
    let text = props.text;

    return (
        <Container className='GallaryCard' key={Math.random()}>
            <Row>
                <Col sm="1">
                <button className='GallaryCardButton'>
                        <img src={LeftArr} width={50} height={50}></img>
                    </button>
                </Col>
                <Col sm={{size:4}} className='GallaryCardImg AnimeSlide'>
                    <img src={img} alt={imgAlt} width={"100%"} height={"300px"}/>
                    </Col>
                <Col className='GallaryCardDescription AnimeSlide'>
                    <p>{text}</p>
                    </Col>
                <Col sm="1">
                    <button className='GallaryCardButton'>
                        <img src={RightArr} width={50} height={50}></img>
                    </button>
                </Col>
            </Row>
            
        </Container>
        
    )
}

export default GallaryCard