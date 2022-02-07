import React from "react";

import { Card, Form, Button } from 'react-bootstrap';
import '../PagesStyles/Home.styles.css';

function Home() {
  return (
    <div>
      {/* Home Cards */}
      <div className="Home-cardsWrapper">
        <Card className='Home-cards' bg='Primary'>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Title </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sequi ratione architecto necessitatibus
              cum praesentium dolor totam voluptatibus recusandae.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='Home-cards'>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Title </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sequi ratione architecto necessitatibus
              cum praesentium dolor totam voluptatibus recusandae.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='Home-cards'>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Title </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sequi ratione architecto necessitatibus
              cum praesentium dolor totam voluptatibus recusandae.
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
