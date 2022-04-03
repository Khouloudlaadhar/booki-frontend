import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-router-dom/NavLink'
import Button from 'react-bootstrap/Button'
import  CloseButton  from 'react-bootstrap/CloseButton'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/actions/userActionCreators'



function AppNavbar() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark"  >
            <Container  >
                <Navbar.Brand >
                    <img src="/logo-booki.png" alt="Booki logo" width={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav>
                            <NavLink className="nav-link" to="/" >Accueil</NavLink>
                            <NavLink className="nav-link" to="/hebergements" >Hebergements</NavLink>
                            <NavLink className="nav-link" to="/activities">Activites</NavLink>
                        </Nav>
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