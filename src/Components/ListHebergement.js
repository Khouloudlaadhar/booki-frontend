import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ListHebergementCard from './ListHebergementCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllHebergements } from '../redux/actions/hebergementActionCreators'

function ListHebergement() {
    const hebergements = useSelector(state => state.hebergements.all)
   

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllHebergements())
    }, [])
    return (
        <Container>
            <Row>
            {hebergements.map(listHebergement => (
                    <ListHebergementCard listHebergement={listHebergement} />
                ))}
            </Row>
        </Container>
    )
}

export default ListHebergement