import React from "react";
import { Card, Col} from "react-bootstrap";

const classDetails = (props) => {
  const { img, title, teacher, price } = props.product || {};
  return (
    <div className='details'>
      <Col>
        <Card>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>
              <small>Teacher: {teacher}</small>
            </Card.Title>
            <Card.Title>
              <small>Fees: ${price}</small>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      {/* <img src={img} alt='...' />
      <h1>{title}</h1>
      <h3>
        <small>Teach By: {teacher}</small>
      </h3> */}
    </div>
  );
};

export default classDetails;