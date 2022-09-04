import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import './Navbigation.css';

const Navbigation = () => {
    return (
        <div className='bg-dark'>
             <Navbar className="container " collapseOnSelect expand="lg"  variant="dark">
              <Container>
                <Link className='px-4 fw-bold text-decoration-none fw-bold text-light shadow-sm fs-5' to="/home">Shorab Hossain</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav menu-item" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                  <Nav className="ms-auto d-flex justify-content-center align-items-center">
                    <Link className='fw-bold active me-4 menubar text-decoration-none text-light' to="/home">Home</Link>
                    <Link className='fw-bold active me-4 menubar text-decoration-none text-light' to="/service">Service</Link>
                    <Link className='fw-bold active me-4 menubar text-decoration-none text-light' to="/contact">Contract</Link>
                    <Link className='fw-bold active me-4 menubar text-decoration-none text-light' to="/about">About</Link>
                    <a href="Shorab (resume).pdf"                       download="Shorab (resume).pdf">
                      <button className='btn btn-primary'
                      type="submit">Resume <BsFillArrowDownCircleFill classNamee="icon-style"/></button>
                    </a>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Navbigation;