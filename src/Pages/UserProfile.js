import React, {useState} from "react";
import { Modal, Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../PagesStyles/user-style.scss';

const Header = () => {
  return (
      <div className="header d-flex w-full justify-content-between pb-4">
        <div>
          <Link to="/Home">
               <Button variant="primary" size="lg">Back </Button>
          </Link>
        </div>
        <div>
            Welcome         
        </div>
        <div className="sign-out">
          <Link to="/">
               <Button variant="primary" size="lg">Log out</Button>
          </Link>
        </div>
      </div>
  )
}
//section to add patient info from a modal
const AddPatient =() => {
  const[show,setShow] = useState(false);
  const handleClose = (e) => {e.preventDefault(); setShow(false)};
  const handleShow = (e) => {e.preventDefault(); setShow(true)};

  console.log(show);
  return(
      <div className="mode">
      
        <Button variant="primary" className="adding" onClick={handleShow}>
            Add Patient info
        </Button>
        <Modal show={show} >
          
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title >Patient Info Log</Modal.Title>
          </Modal.Header>

          <Modal.Body>        
            <Form onSubmit={handleClose} className="forms">
                <Form.Group className="patientId" controlId = "id">
                    <Form.Label>Patient ID</Form.Label>
                    <Form.Control type="text" placeholder="COVID-19-AR-00000"/>
                </Form.Group> 
                <Form.Group className="age" controlId = "age1">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" size="" placeholder="00 years"/>
                </Form.Group>      
                <Form.Group className="zip" controlId = "zip1">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="number" placeholder="00000"/>
                </Form.Group>
                <Form.Group className="bmi" controlId = "bmi1">
                    <Form.Label>Latest BMI</Form.Label>
                    <Form.Control type="number" placeholder="00.00"/>
                </Form.Group> 
                <Form.Group className="weight" controlId = "weight1">
                    <Form.Label>Latest Weight</Form.Label>
                    <Form.Control type="number" placeholder="000"/>
                </Form.Group>      
                <Button className="btn" variant="primary" type="submit">Save</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer onClick={handleClose}>
              <Button className="btn" variant="warning">             
                Cancel
              </Button>

          </Modal.Footer>
              <Button variant="danger" onClick={handleClose}>Delete</Button>
        </Modal>
      </div> 
  )
}
//This section takes test results input 
const AddTest =() => {
const[show,setShow] = useState(false);
const handleClose = (e) => {e.preventDefault(); setShow(false);}
const handleShow = (e) => {e.preventDefault(); setShow(true);}
console.log(show); 

return(
    <div className="mode">
      
      <Button variant="primary" className="adding" onClick={handleShow}>
            Add Test results
      </Button>
      <Modal className="modaltest" show={show} >
        
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title >Test Details Log</Modal.Title>
          </Modal.Header>

          <Modal.Body>        
          <Form onSubmit={handleClose} className="forms">
              <Form.Group className="patientId" controlId = "id">
                  <Form.Label>Patient ID</Form.Label>
                  <Form.Control type="text" placeholder="COVID-19-AR-XXXXX"/>
              </Form.Group> 
              <Form.Group className="date" controlId = "date1">
                  <Form.Label>Date of test</Form.Label>
                  <Form.Control type="date" />
              </Form.Group>      
              <Form.Group className="brixia" controlId = "brixia1">
                  <Form.Label>Brixia Score</Form.Label>
                  <Form.Control type="number" placeholder="X"/>
              </Form.Group>
              <Form.Group className="finding" controlId = "finding1">
                  <Form.Label>Key Findings</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Finding comments"/>
              </Form.Group>
              <Form.Group className="formFile" controlId = "file1">
                  <Form.Label>Upload X-ray image</Form.Label>
                  <Form.Control type="file"/>
              </Form.Group>
              
              <Button className="btn" variant="primary" type="submit">Save</Button>
          </Form>
          </Modal.Body>
          <Modal.Footer onClick={handleClose}>
            <Button variant="warning"  className="btn">             
                 Cancel
            </Button>        
          </Modal.Footer>
            <Button variant="danger" onClick={handleClose}>Delete</Button>
      </Modal>
      </div> 
  )
  }

//section to search patient and test by Id
const SearchBar=()=>{
  //mock-up data
  const testAPI = [{id: "16434", age: 51, zip: 72201, bmi: 37.7, weight: 207, 
                   date: "01/02/2022", brixia: "2", 
                   findings: "Subtle patchy bibasilar atelectasis", 
                   file: "COVID-19-AR-16434.png", }]
           
  console.log("usestate ", useState("hello"));
  const[show, setShow] = useState(false);
  const handleClose = (e) => {e.preventDefault(); setShow(false)};
  const handleShow = (e) =>  {
    e.preventDefault(); 
    setShow(true);
  };
//display data from array
  return(
    <div> 
        <Form  className="search" onSubmit={handleShow}>
            <Form.Group className="search1" control="search">
                <Form.Label className="searchLabel">Search by ID</Form.Label>
                <Form.Control className="searchControl" type="text"  placeholder="COVID-19-AR-XXXXX"/>   
            </Form.Group>
            <Button className="btn" variant="primary"  type="submit">Search Now</Button>
        </Form>   

        <Modal show={show}>
         <Modal.Header onClick={handleClose} closeButton >
            <Modal.Title className="result">Search Results</Modal.Title>
         </Modal.Header>

         <Modal.Body>     
             <div className = "test1">
                  <h3> Patient Info </h3> 
                  <hr/>                   
                {testAPI.map(test => 
                    <div key={test.id}> 
                      <div>
                        <p> ID: {test.id}</p>                      
                        <hr/>
                        <p> age: {test.age}</p>                      
                        <hr/>
                        <p> zip: {test.zip}</p>  
                        <hr/>                    
                        <p> BMI: {test.bmi}</p> 
                        <hr/>  
                        <p> weight: {test.weight}</p> 
                        <hr/>                                                   
                      </div>  
                      <h3> Test Info </h3> 
                      <hr/>
                      <div>                                           
                        <p> Date of test: {test.date}</p>  
                        <hr/>                    
                        <p> Severity score: {test.brixia}</p> 
                        <hr/>                    
                        <p> Findings: {test.findings}</p>    
                        <hr/>                   
                        <p> Image file: {test.file}</p>  
                      </div>                     
                    </div>                
                  )}
                  <hr/>
                 <div>
                     * Hello *
                 </div>             
             </div>             
         </Modal.Body>

         <Modal.Footer onClick={handleClose}>
             <Button variant="primary">Close</Button>
         </Modal.Footer>
       </Modal>
    </div>     
  )
}

//Admin account section
const UserAccount = () =>{
  return(
     <div>
        <div>
          Account Profile 
        </div>
        <div className="picInfo">
            <div className="pic">
              Pic
            </div>
            <div className="userInfo">
                <div className="name">
                  Name
                </div>
                <div className="title">
                  Title
                </div>
            </div>
        </div>   
    </div>
  )
}  

const Footer=()=>{
  return(
    <div className="footer">
        About . Social Media . Terms and Conditions
    </div>
  )
}

const UserProfile = () => {

  return(
    <div className="profile">
        <div className="head">
          <Header/>         
        </div>
        <div className="userProfile">
{/* account and search section */}
          <div className="accountsrc">
              <div className="account">
                <UserAccount/>
              </div>
              <div className="searching">
                <SearchBar/>
              </div>
           </div>
           <div className="add">
              <div className="patients">
                <AddPatient/>
              </div>
              <div className="tests">
                <AddTest/>
              </div>
           </div>
        </div>
        <hr/>
        <div >
          <Footer/>
        </div>
    </div>
  )
}
export default UserProfile;