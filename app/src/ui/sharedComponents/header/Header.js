import React from "react"
import "./Header.css"
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { SignUpModal } from '../sign-up/signUpModal'
import { SignInModal } from '../sign-in/signInModal'

export const Header = () => {

	return (<>
<header>
	<Navbar expand="lg">
		<Navbar.Brand href="/">National Parks</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ml-auto">
				<Nav.Link className="px-2" href="park-search">Search For Parks</Nav.Link>
				<Nav.Link className="px-2" href="/aboutPage">About Us</Nav.Link>
				<SignUpModal/>
				<SignInModal/>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
</header>
		</>
	)
};