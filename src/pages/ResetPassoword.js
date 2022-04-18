import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function ResetPassoword() {
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("")
  const [error, setError] = useState("")
  const [validUrl, setValidUrl] = useState(false)
  const param = useParams();
  const url = `http://localhost:5000/password-reset/${param.id}/${param.token}`
  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(url)
        setValidUrl(true)
      } catch (error) {
        setValidUrl(false)
      }
    }
    verifyUrl()
  }, [param.url])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(url, { password })
      setMsg(data.message);
      setError("");
      window.location = "/login"
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
    <Fragment>
      {validUrl ? (
        <Container className='mt-5 border border-dark p-5'>
          <Form onSubmit={handleSubmit} className="m-5">
            <h3 className="text-center text-dark">Ajouter nouveau mot de passe</h3>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Entrer le nouveau mot de passe" />
            </Form.Group>
            {error && <div className="error-msg">{error}</div>}
            {msg && <div className="success-msg">{msg}</div>}
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>

        </Container>

     
) : (
  <h1>404 Not Found</h1>
)}

      

    </Fragment>
  )
}

export default ResetPassoword