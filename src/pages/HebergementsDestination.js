import React from 'react'
import  Container from 'react-bootstrap/Container'
import ListHebergement from '../components/ListHebergement'

function HebergementsDestination() {
  return (
    <Container className="mt-4">
      <h1>Hammamet:les meilleures hébergements </h1>
      <ListHebergement />
    </Container>
  )
}

export default HebergementsDestination