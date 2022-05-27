import React from 'react'
import Card from 'react-bootstrap/Card'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';


const ratingChanged = (newRating) => {
    console.log(newRating)
}

function HebergementCard({ hebergement }) {
    return (
        <div className='col-12 col-sm-8 col-md-6 col-lg-4 p-2'>
            <Card className="shadow-lg p-3 mb-5 bg-body rounded rounded-4">
                <Card.Img variant="top" src={hebergement.photo} height={200} style={{ objectFit: 'contain' }} />
                <Card.Body>
                    <Card.Title className=' d-flex gap-2'>
                         {`${hebergement.title}:`}
                        <ReactStars
                            count={5}
                            value={hebergement.rating}
                            onChange={ratingChanged}
                            size={24}
                            edit={false}
                        />
                    </Card.Title>
                    <Card.Text>
                        {hebergement.description}
                    </Card.Text>
                    <Card.Text>
                        <i className="bi bi-geo-alt-fill me-2"></i>
                        {hebergement.adress}
                    </Card.Text>
                </Card.Body>
                <Link to={`/hebergemnts/${hebergement._id}`} className="btn btn-primary">Voir l'offre</Link>
            </Card>

        </div>
    )
}


export default HebergementCard