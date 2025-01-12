import React, { useContext } from 'react'
import { useState } from 'react';
import { Form, Label, Input, FormGroup, Row, Col } from 'reactstrap'
import img1 from "./resources/image1.jpg";
import img2 from "./resources/image2.png";
import GallaryCard from './GallaryCard';



function ScrollSlide(props) {
  const [CurrentIndex, SetIndex] = useState(0);
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
      img1,
      "Alt For Image",
      "Text Description3"
    ]
]

  const Items = (props) => {
      let CardsArry = [];

      for (const item of ItemsArr) {
        let card = (
          <GallaryCard img={item[0]} text={item[2]} imgAlt={item[1]} theme={props.theme}/>
        );
        
        console.log(item);
        CardsArry.push(card);
      }

      console.log(props.theme);
      return CardsArry[CurrentIndex];
  }

  return (
    <div className="ScrollSlide">
      <div>
        {Items(props)}
      </div>
      <Form className='ScrollSlideControl' style={{border: "1px solid " + props.theme.underlineHeavy}}>
        <Row>
          <Col sm="1">
            <Label for="ScrollSlideRange" style={{color: props.theme.h1}}>{Number(CurrentIndex)+1}/{ItemsArr.length}</Label>
            </Col>
          <Col>
            <Input className='hl-dark' id="ScrollSlideRange" name="range" type="range" defaultValue={0} plaintext={false} color='primary' onChange={(e) => SetIndex(e.target.value)} max={ItemsArr.length-1}/>
            {/* <input type='range' max={ItemsArr.length-1} defaultValue={0} id="ScrollSlideRange" onChange={(e) => SetIndex(e.target.value)}/> */}
            </Col>
        </Row>
      </Form>
      </div>
  )
}

export default ScrollSlide