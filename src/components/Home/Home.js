import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ClassDetails from "../ClassDetails/ClassDetails";
import "./Home.css";
import HeaderImage from "../../images/kids-teaching.jpg";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/homeClass.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div>
        <img src={HeaderImage} alt='' className='header-image' />
      </div>
      <div className='courses'>
        <h1 className='courses-header'>Top Courses</h1>
        <Container>
          <Row xs={1} md={2} lg={3} className='g-4'>
            {products.map((product) => (
              <ClassDetails key={product.key} product={product}></ClassDetails>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;