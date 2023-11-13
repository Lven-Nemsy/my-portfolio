import { Link } from "react-router-dom";
import React from "react";
//import { Button } from "bootstrap";
// import Container from "react-bootstrap/Container";


export default function MainNav() {
	// The Navbar UI component will render each of the Link elements in the links prop
	return (
		<nav className="navbar navbar-expand-lg bg-info">
			{[
				<Link key={1} className="header-div-ul-li" to="/">
					About
				</Link>,
				<Link key={2} className="header-div-ul-li" to="Portfolio">
					Portfolio
				</Link>,
				<Link key={3} className="header-div-ul-li" to="/Resume">
					Resume
				</Link>,
				<Link key={4} className="header-div-ul-li" to="/Contact">
					Contact
				</Link>,
			]}
		</nav>
	);
}
