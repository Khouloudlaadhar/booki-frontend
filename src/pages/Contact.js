import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { alertError } from '../utils/feedback';
import axios from 'axios';

const Contact = () => {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [msg, setMsg] = useState("")
  const [error, setError] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { firstName, lastName, email, phone, message } = registerData

      const data = await axios.post(`http://localhost:5000/contact/`, { firstName, lastName, email, phone, message })
      console.log({ firstName, lastName, email, phone, message })
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
  function handleChange(e) {
    setRegisterData(prevItemData => ({ ...prevItemData, [e.target.name]: e.target.value }))
  }
  return (
    <div className="container contact my-5 ">
      <div className="row">
        <div className="col-md-8 col-12 mx-auto">
          <div className="card shadow-lg border-0 p-4">
            <h1 className="text-center bg-dark text-white display-4 d-inline-block">Nous contacter</h1>
            <Form onSubmit={handleSubmit} className=" my-5  w-100" >

              <div className="d-flex justify-content-between gap-2">
                <Form.Group className="mb-3 w-50">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type='text'
                    value={registerData.firstName}
                    onChange={handleChange}
                    name='firstName'
                  />
                </Form.Group>

                <Form.Group className="mb-3 w-50">
                  <Form.Label>Nom de famille</Form.Label>
                  <Form.Control
                    type='text'
                    value={registerData.lastName}
                    onChange={handleChange}
                    name='lastName'
                  />
                </Form.Group>
              </div>

              <div className="d-flex justify-content-between gap-2">
                <Form.Group className="mb-3 w-50">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type='email'
                    value={registerData.email}
                    onChange={handleChange}
                    name='email'
                  />
                </Form.Group>

                <Form.Group className="mb-3 w-50">
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control
                    type='tel'
                    value={registerData.phone}
                    onChange={handleChange}
                    name='phone'
                  />
                </Form.Group>
              </div>

              <div class="mb-3">
                <Form.Group className="mb-3 w-100">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type='text'
                    value={registerData.message}
                    onChange={handleChange}
                    name='message'
                  />
                </Form.Group>
              </div>

              <Button variant="primary" type="submit" className="w-100">
                Envoyer message
              </Button>
            </Form>



          </div>
        </div>
      </div>

    </div>
  )
}
export default Contact

