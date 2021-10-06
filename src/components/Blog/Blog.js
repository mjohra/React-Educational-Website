import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <h1 className='courses-header'>This is our Blog</h1>
      <Container>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  variant='top'
                  src='https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg'
                />
                <Card.Body>
                  <Card.Title>It feels good to be lost in the right direction.</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;