import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHebergementById } from '../redux/actions/hebergementActionCreators';
import Card from 'react-bootstrap/Card'
import ReactStars from 'react-rating-stars-component';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Services from '../components/Services';



const HebergementDetails = (props) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedHebergement = useSelector(state => state.hebergements.selected)

  useEffect(() => {
    dispatch(fetchHebergementById(id))
  }, [dispatch, id])


  const ratingChanged = (newRating) => {
    console.log(newRating)
  }

  return (
    <Container className='mt-3 p-5'>
      {
        selectedHebergement ? (
          <div >
            <div className="d-flex justify-content-between mb-2">

              <div className="d-flex m-2">
                <h3>{selectedHebergement.title}</h3>
                <ReactStars
                  count={5}
                  value={selectedHebergement.rating}
                  onChange={ratingChanged}
                  size={24}
                  edit={false}
                />
              </div>
              <Button>Reserver Hotel</Button>
            </div>

            <Card className="shadow-lg p-3 mb-5 bg-body">
              <div className='d-flex justify-content-center' >

                <Card.Img variant="top" src={selectedHebergement.photo} height={650} widht={650} style={{ objectFit: 'contain' }} />

              </div>
              <Card.Body>
                <Card.Title> {selectedHebergement.title} </Card.Title>
                <Card.Text>
                  <ReactStars
                    count={5}
                    value={selectedHebergement.rating}
                    onChange={ratingChanged}
                    size={24}
                    edit={false}
                  />
                </Card.Text>
                <Card.Text>
                <i className="bi bi-geo-alt-fill"></i>
                  {selectedHebergement.adress}
                </Card.Text>
              </Card.Body>

            </Card>
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