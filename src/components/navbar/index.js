

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, NavLink } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


const Navigation = () => {
	return (
   <Navbar expand="lg" className="bg-body-tertiary">
    <Container>

     <Navbar.Brand href="#home"><img width="30px" alt="logo" src="../../../logo192.png"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} href="/">Home</Nav.Link>
        <Nav.Link as={NavLink} href="/about">About</Nav.Link>
        <Nav.Link as={NavLink} href="/blogs">Blogs</Nav.Link>
        <Nav.Link as={NavLink} href="/contact">Contact</Nav.Link>
        <Nav.Link as={NavLink} href="/sign-up">Sign up</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
/*  <>
		<Nav>
				<NavMenu>
        <NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact Us
					</NavLink>
					<NavLink to="/blogs" activeStyle>
						Blogs
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Sign Up
					</NavLink>
				</NavMenu>
			</Nav>
      </>  */


	);
};

export default Navigation;
