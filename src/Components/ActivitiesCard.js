import React from 'react'

import Card from 'react-bootstrap/Card'


function ActivitiesCard({activities}) {

  return (
   
                    
    <div className='col-12 col-sm-8 col-md-6 col-lg-4 p-2'>
    <Card className="shadow-lg p-3 mb-5 bg-body rounded rounded-4">
        <Card.Img variant="top" src={activities.photo} height={200} style={{ objectFit: 'contain' }} />
        <Card.Body>
            <Card.Title >
                 {activities.title}
                
            </Card.Title>
           
            
        </Card.Body>
        
    </Card>

</div>
  )
}

export default ActivitiesCard