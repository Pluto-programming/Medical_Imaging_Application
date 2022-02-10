import React from "react";

import { Card, Form, Button } from 'react-bootstrap';
import '../PagesStyles/SignIn.styles.css';

function SignIn() {
    return (


<div className="SignIn-formWrapper">
 <h4 className='SignIn-formTitle'>Sign In</h4>
 <Form className="SignIn-Form">
     <Form.Group className="mb-3" controlId="formEmail">
         <Form.Label>Email</Form.Label>
         <Form.Control type="text" placeholder="abc@123.edu" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="text" placeholder="*****" />
     </Form.Group>
     {/* <Form.Group className="mb-3" controlId="formDOB">
         <Form.Label>Date Of Birth</Form.Label>
         <Form.Control type="text" placeholder="01/01/1999" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formZipCode">
         <Form.Label>Zip Code</Form.Label>
         <Form.Control type="text" placeholder="01852" />
     </Form.Group> */}
     <Button className="SignIn-formButton"  type="submit">
       Sign In
     </Button>
 </Form>
</div>
);

}

export default SignIn


