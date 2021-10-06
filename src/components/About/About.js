import React from "react";
import { Container, Table } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container>
        <h2 className='courses-header'>Know More About Our Team</h2>
        <Table responsive striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Khadija</td>
              <td>Mala</td>
              <td>Drawing</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nahian</td>
              <td>Morshed</td>
              <td>Math</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Shovon</td>
              <td>Raihan</td>
              <td>English</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Roney</td>
              <td>Morshed</td>
              <td>Painting</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Mehajbin</td>
              <td>Johra</td>
              <td>Math</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Mehjabin</td>
              <td>Mouri</td>
              <td>Creative drawing</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Farhana</td>
              <td>Raihan</td>
              <td>Drawing</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Azan</td>
              <td>Morshed</td>
              <td>Science</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Larry</td>
              <td>page</td>
              <td>Drawing</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Tauhid</td>
              <td>Muhit</td>
              <td>Math</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Hebron</td>
              <td>Hamim</td>
              <td>History</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default About;