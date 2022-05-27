import React, { useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllActivities } from '../redux/actions/activitiesActionCreator'

import ActivitiesCard from './ActivitiesCard'


function DisplayActivities() {

    const activities= useSelector(state => state.activities.allActivities)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllActivities())
    }, [])

  
   
    return (
        <Container>
 
            <Row>
                {activities.map(activities => (
                    <ActivitiesCard activities={activities} />
                ))}
            </Row>
        </Container>
    )
}



export default DisplayActivities