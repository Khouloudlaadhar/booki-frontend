import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { alertError } from '../utils/feedback';
import { requestRegister } from '../redux/actions/userActionCreators';

function Register() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = registerData
    if (!firstName) {
      return alertError('First name is required')
    }
    if (!lastName) {
      return alertError('Last name is required')
    }
    if (!email) {
      return alertError('Email is required')
    }
    if (!password) {
      return alertError('Password is required')
    }
    if (!confirmPassword) {
      return alertError('You have to confirm your password')
    }
    if (password !== confirmPassword) {
      return alertError('Passwords mismatch')
    }
    dispatch(requestRegister({ firstName, lastName, email, password }, history))
  }
  function handleChange(e) {
    setRegisterData(prevItemData => ({ ...prevItemData, [e.target.name]: e.target.value }))
  }
  return (
    <Form onSubmit={handleSubmit} className="container mt-5 border border-dark p-5" >
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type='text'
          value={registerData.firstName}
          onChange={handleChange}
          name='firstName'
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type='text'
          value={registerData.lastName}
          onChange={handleChange}
          name='lastName'
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          value={registerData.email}
          onChange={handleChange}
          name='email'
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          value={registerData.password}
          onChange={handleChange}
          name='password'
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type='password'
          value={registerData.confirmPassword}
          onChange={handleChange}
          name='confirmPassword'
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Submit
      </Button>
    </Form>
  )
}

export default Register;