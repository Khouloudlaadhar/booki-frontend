import React from 'react'
import Container from 'react-bootstrap/Container'
import DisplayHebergements from '../Components/DisplayHebergements'
import ButtonsFilter from '../Components/ButtonsFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllHebergements, FilterHebergements } from '../redux/actions/hebergementActionCreators';
import { requestStarted, requestSucceeded } from '../redux/actions/feedbackActionCreators';


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
