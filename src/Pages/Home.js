import React from "react";

import { Card, Form, Button } from 'react-bootstrap';
import '../PagesStyles/Home.styles.css';

function Home() {
  return (
    <div>
      {/* Home Cards */}
      <div className="Home-cardsWrapper">
        <Card className='Home-cards' bg='Primary'>
          <Card.Header>Home page</Card.Header>
          <Card.Body>
            <Card.Title>Contents </Card.Title>
            <Card.Text>
            The Home page contains search boxes to be able to look 
            for a patient's exam records based on First Name, Last Name,
             Date of Birth, and Zip Code. After clicking the Search button you will be 
             redirected to a page containing all the patient's information and X-rays.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='Home-cards'>
          <Card.Header>All Reports</Card.Header>
          <Card.Body>
            <Card.Title>Contents</Card.Title>
            <Card.Text>
           This page will contain all the exam records of every patient
           inside our database, as well as having links to the images of their X-rays. You can sort
           these records based on Date, Brexit score, and Age.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='Home-cards'>
          <Card.Header>Sign In</Card.Header>
          <Card.Body>
            <Card.Title>Contents </Card.Title>
            <Card.Text>
             This page will verify the credentials of authorized users 
             to grant them access to the database, so that they can be able 
             to update patients records and add new patients into the database.
            </Card.Text>
          </Card.Body>
        </Card>
     </div>

     <div className="Home-formWrapper">
      <h4 className='Home-formTitle'>Look up patient</h4>
      <Form className="Home-Form">
          <Form.Group className="mb-3" controlId="formName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="John" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Smith" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDOB">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control type="text" placeholder="01/01/1999" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formZipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="01852" />
          </Form.Group>
          <Button className="Home-formButton"  type="submit">
            Search
          </Button>
      </Form>
    </div>
    </div>
  );
}

export default Home;
