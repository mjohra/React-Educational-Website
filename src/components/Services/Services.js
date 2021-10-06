import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ClassDetails from "../ClassDetails/ClassDetails";

const Services = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/class.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='courses'>
      <h1 className='courses-header'>List of Courses</h1>
      <Container>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {products.map((product) => (
            <ClassDetails key={product.key} product={product}></ClassDetails>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;