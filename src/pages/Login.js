import React, { useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { requestLogin } from '../redux/actions/userActionCreators'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordType, setPasswordType] = useState('password')
  const dispatch = useDispatch()
  const history = useHistory()
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(requestLogin(email, password, history))
  }
  return (
    <Container className='my-5 border border-dark p-5 ' >
      <Form onSubmit={handleSubmit} className="m-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
             <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              type={passwordType}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" />
            <Button style={{ outline: 'none' }} variant="primary" id="button-addon2"
              onClick={() => setPasswordType(prevPasswordType => setPasswordType(prevPasswordType === 'password' ? 'text' : 'password'))}>
              <i class={`bi bi-eye${passwordType === 'text' ? '-slash' : ''}`}></i>
            </Button>
          </InputGroup>
        </Form.Group>
        
        <Button variant="primary" type="submit" className="w-100">
          connecter
        </Button>
        <Link to={'/forgot-password'} className="text-right d_flex " >
          <p>Mode de passe oublié?</p></Link>
      </Form>
      <Link to="/register">
        <Button className=" mx-auto" variant="secondary"  >
          Pas de compte ? Créez-en un
        </Button>
      </Link>
    </Container>
  )
}

export default Login