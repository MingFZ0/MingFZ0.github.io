import React, { useContext } from 'react'
import { useState } from 'react';
import { Form, Label, Input, FormGroup, Row, Col } from 'reactstrap'
import img1 from "./resources/image1.jpg";
import img2 from "./resources/image2.png";
import GallaryCard from './GallaryCard';



function ScrollSlide() {
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

  const Items = () => {
      let CardsArry = [];

      for (const item of ItemsArr) {
        let card = (
          <GallaryCard img={item[0]} text={item[2]} imgAlt={item[1]}/>
        );
        
        console.log(item);
        CardsArry.push(card);
      }

      console.log(CardsArry[0][0]);
      return CardsArry[CurrentIndex];
  }

  return (
    <div>
      <div>
        {Items()}
      </div>
      <Form>
        <Row>
          <Col sm="1">
            <Label for="ScrollSlideRange">{Number(CurrentIndex)+1}/{ItemsArr.length}</Label>
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