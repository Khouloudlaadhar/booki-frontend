import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [error, setError] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const { data } = await axios.post(`http://localhost:5000/password-reset/`, { email })
      console.log(data)
      setMsg(data.message);
      setError("")
    } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500) {
        setError(error.response.data.message)
        setMsg("");
      }

    }

  }
  return (
    <Container className='mt-5 border border-dark p-5'>
      <Form onSubmit={handleSubmit} className="m-5">
        <h3 className="text-center text-dark">Forgot Password</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           
            placeholder="Enter email" />
        </Form.Group>
        {error && <div className="error-msg">{error}</div>}
        {msg && <div className="success-msg">{msg}</div>}
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>

    </Container>
  )
}

export default ForgotPassword