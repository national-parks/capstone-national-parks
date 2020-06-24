import React from "react"
import "./Header.css"
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import {SignUpModal} from './sign-up/signUpModal'
import {SignInModal} from './sign-in/signInModal'

export const Header = () => {

	return (<>
<header>
	<Navbar expand="lg">
		<Navbar.Brand href="#home">National Parks</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ml-auto">
				<Nav.Link href="#home">Home</Nav.Link>
					<NavDropdown title="Browse Parks" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">By Ammenities</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">By Location</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Search</NavDropdown.Item>
					</NavDropdown>
				<Nav.Link href="#home">About Us</Nav.Link>
				<SignUpModal/>
				<SignInModal/>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
</header>
		</>
	)
};