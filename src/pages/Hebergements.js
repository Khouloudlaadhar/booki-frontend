
import React from 'react'
import { Container } from 'react-bootstrap'
import ListHebergement from '../components/ListHebergement'



function Hebergements() {

  return (
    <Container className="mt-4">
      <h1>Hammamet:les meilleures hébergements </h1>
      <ListHebergement />
    </Container>
  )

}



export default Hebergements