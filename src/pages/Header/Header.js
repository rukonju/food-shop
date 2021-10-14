import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className="py-0" collapseOnSelect expand="lg" style={{background:"rgba(0,128,0,0.1)"}} >
                <Navbar.Brand>
                <img
                    alt=""
                    src="/logo.png"
                    height="50"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto links">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/vegetable">Vegetable</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                    </Nav>
                    <Nav className="nav-btn">
                        <NavLink to="/login">
                            <Button variant="outline-success">login</Button>
                        </NavLink>
                        <NavLink to="/sign_up">
                            <Button variant="success">Sign Up</Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                    <div className="me-2">
                        <img
                        alt=""
                        src="/path 1.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />  
                    </div>
            </Navbar>
        </div>
    );
};

export default Header;