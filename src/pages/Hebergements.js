
import React from 'react'
import { Container } from 'react-bootstrap'
import DisplayHebergements from '../components/DisplayHebergements'



function Hebergements() {

  return (
    <Container className="mt-4">
      <h1>Hammamet:les meilleures hébergements </h1>
      <DisplayHebergements />
    </Container>
  )

}



export default Hebergements