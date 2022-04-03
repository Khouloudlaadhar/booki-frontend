import React, { useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import NavLink from 'react-router-dom/NavLink'
import { requestLogin } from '../redux/actions/userActionCreators'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordType, setPasswordType] = useState('password')
  const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(requestLogin(email, password))
  }
  return (
    <Container className='mt-5'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control type={passwordType} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

            <Button style={{outline: 'none'}} variant="primary" id="button-addon2" onClick={() => setPasswordType(prevPasswordType => setPasswordType(prevPasswordType === 'password' ? 'text' : 'password'))}>
              <i class={`bi bi-eye${passwordType === 'text' ? '-slash' : ''}`}></i>
            </Button>
          </InputGroup>
        </Form.Group>

        <Button  variant="primary" type="submit">
          Submit
        </Button>
        
  
        
      </Form>
    <NavLink className="nav-link" to="/register" >
      <Button clasName="mt-3" variant="primary" >
          Pas de compte ? Créez-en un 
        </Button>
        </NavLink>
    </Container>
  )
}

export default Login