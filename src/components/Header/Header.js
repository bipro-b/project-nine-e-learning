import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    }
    return (
        <div className="header w-100">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="mx-auto">LINEAR</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
                        <NavLink to="/about" activeStyle={activeStyle}>About Us</NavLink>
                        <NavLink to="/services" activeStyle={activeStyle}>Services</NavLink>
                        <NavLink to="/enroll" activeStyle={activeStyle}>Enroll Now</NavLink>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;