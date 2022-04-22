import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function AppNavbar() {
    return (

        <Navbar collapseOnSelect expand="lg" variant="dark" className="Navbar"  >
            <Container  >
                <Navbar.Brand >
                    <img src="/logo-booki.png" alt="Booki logo" width={100} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/" >Accueil</NavLink>
                        <NavLink className="nav-link" to="/about" >A propos</NavLink>
                        <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="/login" >
                            <Button variant="outline-secondary" size="lg" className="me-2" >
                                se connecter
                            </Button>
                        </NavLink>
                        <NavLink className="nav-link" to="/register" >
                            <Button variant="outline-secondary" size="lg" className="me-2" >
                                s'inscrire
                            </Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar