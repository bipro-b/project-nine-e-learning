import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className="header w-100">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="mx-auto">LINEAR</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/enroll">Enoroll Now</NavLink>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;