import React, { useContext } from 'react'
import { Form, Label, Input, FormGroup } from 'reactstrap'
import img1 from "./image1.jpg";

const ItemsArr = [
    [
      <img src={img1} alt="image1" />,
      <p>Text Description</p>
      ],
    [
      <img src={img1} alt="image1" />,
      <p>Text Description</p>
      ],
    [
      <img src={img1} alt="image1" />,
      <p>Text Description</p>
      ],
]

function ScrollSlide() {

  return (
    <div>
      <div>

      </div>
      <Form>
        <FormGroup>
            <Label for="exampleRange"></Label>
            <Input id="exampleRange" name="range" type="range" max={ItemsArr.length}/>
            </FormGroup>
            </Form>
    </div>
  )
}

export default ScrollSlide