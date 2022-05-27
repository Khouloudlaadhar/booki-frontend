import React from 'react'
import Container  from 'react-bootstrap/Container'
import DisplayActivities from '../components/DisplaydActivities'

function Activities() {
  return (
    <Container className="mt-4">
    <h1>Hammamet: les meilleures activités </h1>
   
      <DisplayActivities />
   
  </Container>
  )
}

export default Activities