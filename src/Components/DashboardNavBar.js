import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const DashboardNavBar = () => {
  return (
      <>
        
     <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src="Images/logo.png" className='logo' alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav.Link href="#home"><AiOutlineBell color='white' size="1.5rem"/></Nav.Link>
          <Nav.Link href="#home"><CgProfile color='white' size="1.5rem"/></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
     </>
  )
}

export default DashboardNavBar