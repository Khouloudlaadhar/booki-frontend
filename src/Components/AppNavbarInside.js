
import  React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/actions/userActionCreators'

function AppNavbarInside() {
const dispatch=useDispatch()
return(
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

                    <i className="bi bi-box-arrow-right" onClick={() => dispatch(logout())}></i>
                    </Nav>
            
        </Navbar.Collapse>
    </Container>
</Navbar>
)

}



export default AppNavbarInside