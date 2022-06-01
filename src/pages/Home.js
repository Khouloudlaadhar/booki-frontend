import React from 'react'
import Container from 'react-bootstrap/Container'
import DisplayHebergements from '../components/DisplayHebergements'
import ButtonsFilter from '../components/ButtonsFilter';
import { useDispatch, useSelector } from 'react-redux';
import { FilterHebergements } from '../redux/actions/hebergementActionCreators';
import { Carousel } from '../components/Carousel';
import Header from '../components/Header/Header';
import DisplayActivities from '../components/DisplaydActivities';



function Home() {
  const hebergements = useSelector(state => state.hebergements.all)
  const dispatch = useDispatch()

  const filter = (button) => {

    const filterdData = hebergements.filter(hebergement => hebergement.categories === button)
    console.log(filterdData)
    dispatch(FilterHebergements(filterdData))


  }


  return (
    <Container className="mt-0 mb-5">
      <Header/>
      
      <Carousel />
      <ButtonsFilter filter={filter} />
      <div className="d-flex  p-2">
        <i className="bi bi-info-circle text-primary px-2"></i>
        <p > Plus de 500 logements sont disponibles dans cette ville</p>
      </div>
      <div>
        <h2 className='text' > Meilleurs choix d'hôtels en Hammamet :</h2>
      </div>
      <DisplayHebergements />
      <div>
        <h2 className='text'>Activités, lieux d'intérêt et bon plan à Hammamet :</h2>
      </div>
      <DisplayActivities />
    </Container>
  )
}

export default Home
