import React from 'react'
import { Button, Container } from 'react-bootstrap'
import DisplayHebergements from '../Components/DisplayHebergements'
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaChild } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaDog } from 'react-icons/fa';
import { BiInfoCircle } from 'react-icons/fa';

function Home() {
  return (
    <Container className="mt-4">
      <h2>Trouvez votre hébergement pour des vacances de rêve</h2>
      <div className="d-flex justify-content-between align-items-center m-4" >
        <Button variant="primary" className="rounded-pill m-2" size="lg"><FaMoneyBillWave />Économique</ Button>
        <Button variant="primary" className="rounded-pill m-2" size="lg">< FaChild />Familial</Button>
        <Button variant="primary" className="rounded-pill m-2" size="lg"><FaHeart />Romantique</Button>
        <Button variant="primary" className="rounded-pill m-2" size="lg"><FaDog />Animaux autorisés</Button>
      </div>
      <div className="d-flex  p-2">
        <i className="bi bi-info-circle text-primary px-2"></i>
        <p > Plus de 500 logements sont disponibles dans cette ville</p>
      </div>
      <div>
        <h2 > Meilleurs choix d'hôtels en Hammamet</h2>
      </div>
      <DisplayHebergements />
    </Container>
  )
}

export default Home
