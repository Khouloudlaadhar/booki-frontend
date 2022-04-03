import React from 'react'
import Card from 'react-bootstrap/Card'


function HebergementCard({ hebergement }) {
    return (
        <div className='col-12 col-sm-8 col-md-6 col-lg-4 p-2'>
            <Card className="shadow-lg p-3 mb-5 bg-body rounded rounded-4">
                <Card.Img variant="top" src={hebergement.photo} height={150} style={{ objectFit: 'contain' }} />
                <Card.Body>
                    <Card.Title> {hebergement.title} </Card.Title>
                    <Card.Text>
                        {hebergement.description}
                    </Card.Text>
                    <Card.Text>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                   

                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}


export default HebergementCard