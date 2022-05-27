
import React from 'react'
import { Container } from 'react-bootstrap'
import ListHebergementCard from '../components/ListHebergementCard'



function Hebergements() {

  return (
    <Container className="mt-4">
      <h1>Hammamet:les meilleures hébergements </h1>
      <ListHebergementCard  />
    </Container>
  )

}



export default Hebergements