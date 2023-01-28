import React, { useEffect, useState ,useRef} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHebergementById } from '../redux/actions/hebergementActionCreators';
import Card from 'react-bootstrap/Card'
import ReactStars from 'react-rating-stars-component';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Services from '../components/Services';
import { Link } from 'react-router-dom';




const HebergementDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedHebergement = useSelector(state => state.hebergements.selected)
  useEffect(() => {
    dispatch(fetchHebergementById(id))
  }, [dispatch, id])

  const titleRef = useRef();
  function handleClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
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
                  <Link to={`/hebergemnts/${selectedHebergement._id}`} >
                    <Button variant="secondary" onClick={handleClick}>Dates & tarifs</Button>
                  </Link>
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
            <Card className="shadow-lg p-3 mb-5 bg-body" >

              <div  className="m-2 text-decoration-underline">
                <h3 ref={titleRef}>Dates & tarifs :</h3>

              </div>
              <Form>
              <div className='d-flex col-12'>
                <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlInput1">
                  <Form.Label className='text-primary fw-bold'>Date d'arrivée :</Form.Label>
                  <Form.Control type="date" placeholder="dd/mm/yyyy" />
                </Form.Group>
                <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlInput1">
                  <Form.Label className='text-primary fw-bold'>Date depart :</Form.Label>
                  <Form.Control type="date" placeholder="dd/mm/yyyy" />
                </Form.Group>
                </div>
                <Form.Group className="mb-1 " controlId="exampleForm.ControlInput1">
                  <Form.Label className='text-primary fw-bold'>Chambre et occupation :</Form.Label>
                  <div className=" d-flex justify-content-between ">
                    
                    
                  
                  <select class="form-select" aria-label="Default select example">
              <option selected>1 chambre 1 adulte 0 enfant</option>
              <option value="1"><span>Adulte </span>
             
    </option>
              <option value="2">Enfant</option>
              <option value="3">Chambre</option>
              </select>
              <Button variant="primary"  > Vérifier la disponibilité</Button>
              </div>
                </Form.Group>

              </Form>
              
            </Card>
            <div class="row">
        <div class="col-sm-3 mx-auto">
            <div class="input-group">
                <span class="input-group-prepend">
                    <button type="button" class="btn btn-outline-secondary btn-number" data-type="minus" data-field="quant[0]" disabled="disabled" onClick={decrementCount} >
                        <span class="fa fa-minus"></span>
                    </button>
                </span>
                <span class="input-group-append"><div >{count}</div></span>
                <span class="input-group-append">
                    <button  onClick={incrementCount} type="button" class="btn btn-outline-secondary btn-number" data-type="plus" data-field="quant[1]">
                        <span class="fa fa-plus"></span>
                    </button>
                </span>
            </div>
        </div>
    </div>
    
            <Card>
              <div className="m-3 ">
                <h3 className='text-decoration-underline'>Description :</h3>
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