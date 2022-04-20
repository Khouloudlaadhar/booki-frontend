import React from 'react'
import Container from 'react-bootstrap/Container'
import DisplayHebergements from '../components/DisplayHebergements'
import ButtonsFilter from '../components/ButtonsFilter';
import { useDispatch, useSelector } from 'react-redux';
import { FilterHebergements } from '../redux/actions/hebergementActionCreators';
import { Carousel } from '../components/Carousel';



function Home() {
  const hebergements = useSelector(state => state.hebergements.all)
  const dispatch = useDispatch()

  const filter = (button) => {

    const filterdData = hebergements.filter(hebergement => hebergement.categories === button)
    console.log(filterdData)
    dispatch(FilterHebergements(filterdData))


  }


  return (
    <Container className="mt-4">
      <h2>Trouvez votre hébergement pour des vacances de rêve</h2>
      <Carousel />
      <ButtonsFilter filter={filter} />
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
