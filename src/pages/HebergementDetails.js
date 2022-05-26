import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHebergementById } from '../redux/actions/hebergementActionCreators';
import Card from 'react-bootstrap/Card'
import ReactStars from 'react-rating-stars-component';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Services from '../components/Services';



const HebergementDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedHebergement = useSelector(state => state.hebergements.selected)
  useEffect(() => {
    dispatch(fetchHebergementById(id))
  }, [dispatch, id])


  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <Container className='mt-3 p-5'>
      {
        selectedHebergement ? (
          <div >
            <div className="d-flex">

              <div className="d-flex flex-column m-2">
                <div className="d-flex justify-content-between m-2">
                  <div className="d-flex  me-3">
                    <h3>{`${selectedHebergement.title}:`}</h3>
                    <ReactStars
                      count={5}
                      value={selectedHebergement.rating}
                      onChange={ratingChanged}
                      size={24}
                      edit={false}
                    />
                  </div>
                  <Button variant="secondary">Dates & tarifs</Button>

                </div>
                <Card className="shadow-lg p-3 mb-5 bg-body">
                  <div className='d-flex justify-content-center' >

                    <Card.Img variant="top" src={selectedHebergement.photo} height={650} widht={650} style={{ objectFit: 'contain' }} />

                  </div>
                  <Card.Body>
                    <Card.Title> {selectedHebergement.destination} </Card.Title>
                    <Card.Text>
                    {selectedHebergement.description}
                    </Card.Text>
                    <Card.Text>
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      {selectedHebergement.adress}
                    </Card.Text>
                  </Card.Body>

                </Card>
              </div>
            </div>
            <Card className="bg-warning shadow-lg p-3 mb-5 ">
              <div className="d-flex ">
                <i className=" pe-2 bi bi-people"></i>
                <p>  Garantissez-vous un super tarif pour votre prochain séjour.</p>
              </div>
              <div className="d-flex ">
                <i className=" pe-2 bi bi-check-circle"></i>
                <p>  Confirmez votre réservation aujourd'hui car les prix peuvent augmenter.</p>
              </div>
            </Card>

            <Services />
            <Card className="shadow-lg p-3 mb-5 bg-body">

              <div className="m-2">
                <h3>Dates & tarifs :</h3>

              </div>
              <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Date d'arrivée</Form.Label>
                  <Form.Control type="date" placeholder="dd/mm/yyyy" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Date depart</Form.Label>
                  <Form.Control type="date" placeholder="dd/mm/yyyy" />
                </Form.Group>
                <Form.Group className="mb-1 " controlId="exampleForm.ControlInput1">
                  <Form.Label>Chambre et occupation</Form.Label>
                  <div className=" d-flex justify-content-between">
                    <Form.Control type="text" placeholder="1 chambre 1 adulte 0 enfant" />
                    <Button variant="primary"  > Vérifier la disponibilité</Button>
                  </div>


                </Form.Group>
              </Form>


            </Card>

            <Card>
              <div className="m-3">
                <h3>Description :</h3>
                <p>{selectedHebergement.description}</p>
              </div>
            </Card>
          </div>
        ) : (
          <div className='alert alert-danger'>
            <h3>Hebergement not found</h3>
          </div>
        )
      }
    </Container>



  )
}
export default HebergementDetails