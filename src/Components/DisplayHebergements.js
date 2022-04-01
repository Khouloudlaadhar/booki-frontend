import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllHebergements } from '../redux/actions/hebergementActionCreators'
import HebergementCard from './HebergementCard'

function DisplayHebergements() {
  
    const hebergements = useSelector(state => state.hebergements.all)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllHebergements())
    }, [])
    return (
        <Container>
            <Row>
                {hebergements.map(hebergement => (
                    <HebergementCard hebergement={hebergement} />
                ))}
            </Row>
        </Container>
    )
}
  


export default DisplayHebergements