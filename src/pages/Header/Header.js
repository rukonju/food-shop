import React from 'react';
import { useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Header.css';

const Header = () => {
    const [isScroll, setIsScroll]=useState(false);
    const{user, googleSignOut}=useAuth();
    const handleGoogleSignOut=()=>{
        googleSignOut()
    }
    const handleScrolling=()=>{
        if(window.scrollY>=400){
            setIsScroll(true)
        }
        else{
            setIsScroll(false)
        }
    }
    window.addEventListener('scroll',handleScrolling);
    return (
        <div className={isScroll?"sticky-top background-style":"nav-style"}>
            <Navbar className="py-1" collapseOnSelect expand="lg" >
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
                        {
                            user.displayName?<div>
                            <div className="me-2">
                            <img
                            alt=""
                            src={user.photoURL}
                            width="30"
                            height="30"
                            className="d-inline-block align-top rounded-circle"
                            />
                            <Button style={{cursor:"pointer"}} onClick={handleGoogleSignOut} >Log Out</Button>  
                            </div>
                            </div>
                            :
                            <div>
                                <NavLink to="/login">
                                <Button variant="outline-success">Login</Button>
                                </NavLink>
                                <NavLink to="/sign_up">
                                <Button variant="success">Sign Up</Button>
                                </NavLink>
                            </div>
                        }
                        
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