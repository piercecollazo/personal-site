import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export default class NavBar extends Component {
    render(){
        return(
            <Navbar expand='md' bg='dark' variant='dark'>
                <Container>
                    <NavbarCollapse>
                    <Nav className='me-auto'>
                        <Nav.Link href="#About">About</Nav.Link>  
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                    </Nav>
                    </NavbarCollapse>
                </Container>

            </Navbar>

            // <nav className="navbar navbar-light bg-dark " style={{expand:'md'}}>
            //     <span className="navbar-brand mb-0 h1">Navbar</span>
            //     <div className="mx-auto text-center justify-space-between">
            //     <a className="btn btn-primary js-scroll-trigger" href="#about">Resume</a>
            //     <a className="btn btn-primary js-scroll-trigger" href="#about">Projects</a>
            //     <a className="btn btn-primary js-scroll-trigger" href="#about">About me</a>
            //     <a className="btn btn-primary js-scroll-trigger" href="#about">Contact</a>
            //     </div>
            // </nav>
        )
    }
}