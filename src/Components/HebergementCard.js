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
                <Card.Img variant="top" src={hebergement.photo} height={150} style={{ objectFit: 'contain' }} />
                <Card.Body>
                    <Card.Title> {hebergement.title} </Card.Title>
                    <Card.Text>
                        <ReactStars  
                            count={5}
                            value={hebergement.rating}
                            onChange={ratingChanged}
                            size={24}
                            edit={false}
                        />
                    </Card.Text>
                    <Card.Text>
                        {hebergement.adress}
                    </Card.Text>
                </Card.Body>
                <Link to={`/hebergemnts/${hebergement._id}`} className="btn btn-primary">Details...</Link>
            </Card>

        </div>
    )
}


export default HebergementCard