import React from 'react'
import Card from 'react-bootstrap/Card'


function HebergementCard({hebergement}) {
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-2'>
            <Card>
                <Card.Img variant="top" src={hebergement.photo} height={150} style={{ objectFit: 'contain' }} />
                <Card.Body>
                    <Card.Title> {hebergement.title} </Card.Title>
                    <Card.Text>
                        {hebergement.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}


export default HebergementCard