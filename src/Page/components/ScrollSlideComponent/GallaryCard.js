import React, { useContext } from 'react'
import { useState } from 'react';
import { Form, Label, Input, FormGroup, Row, Container, Col } from 'reactstrap'

function GallaryCard(props) {
    let img = props.img;
    let imgAlt = props.imgAlt;
    let text = props.text;

    return (
        <Container className='GallaryCard' key={Math.random()}>
            <Row>
                <Col sm="1">
                    <div className='GallaryCardBar'></div>
                </Col>
                <Col sm={{size:4}} className='GallaryCardImg AnimeSlide'>
                    <img src={img} alt={imgAlt} width={"100%"} height={"300px"}/>
                    </Col>
                <Col className='GallaryCardDescription AnimeSlide'>
                    <p>{text}</p>
                    </Col>
            </Row>
            
        </Container>
        
    )
}

export default GallaryCard