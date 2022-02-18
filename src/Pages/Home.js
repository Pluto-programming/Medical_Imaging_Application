import React, { useState, useContext } from "react";
import { Context } from '../Store';

import { useNavigate } from "react-router-dom";

import { Card, Form, Button } from 'react-bootstrap';
import '../Styles/Scss/Home.styles.scss';


function Home() {

const [ state, setState ] = useContext(Context);
const navigate = useNavigate();

const [firstName, setName] = useState("");
const [lastName, setLastName] = useState("");
const [dob, setDob] = useState("");
const [zip, setZip] = useState("");
const [patientId, setPatientId] = useState("");

  function getPatient(e) {
    e.preventDefault();
    console.log(firstName + "BEFORE");
    this.setState({
      'dob': dob,
      ' firstName': firstName,
      ' lastName':  lastName,
      ' id': patientId,
      'zip': zip,
    })
    state.firstName = firstName; 
    console.log(+ state.firstName + "    DID IT WORK?" + state.zip);
    navigate('/UserProfile');
  }

  return (
    <div className="Home">
      {/* Home Cards */}
      <div className="Home-cardsWrapper">
        <Card className='Home-cards' bg='Primary'>
          <Card.Header>Header</Card.Header>
          <Card.Body>
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
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sequi ratione architecto necessitatibus
              cum praesentium dolor totam voluptatibus recusandae.
            </Card.Text>
          </Card.Body>
        </Card>
     </div>

{/* Look up form  */}
     <div className="Home-formWrapper">
      <h5 className='Home-formTitle'>Look up patient</h5>
      <Form className="Home-Form" onSubmit={getPatient}>
          <Form.Group className="mb-3" controlId="formName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="John" value={firstName} onChange={e => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Smith" value={lastName} onChange={e => setLastName(e.target.value)}/>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formDOB">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control type="text" placeholder="01/01/1999" value={dob} onChange={e => setDob(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formZipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="01852" value={zip} onChange={e => setZip(e.target.value)}/>
          </Form.Group>

          <h6 className="Home-formTitle"> Or </h6>

          <Form.Group className="mb-3" controlId="formPatientID">
              <Form.Label>Patient ID</Form.Label>
              <Form.Control type="text" placeholder="COVID-AR-164XXXXX" value={patientId} onChange={e => setPatientId(e.target.value)}/>
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
