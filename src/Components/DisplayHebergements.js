import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllHebergements } from '../redux/actions/hebergementActionCreators'
import HebergementCard from './HebergementCard'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

function DisplayHebergements() {

    const hebergements = useSelector(state => state.hebergements.all)
    const hebergementFiltered = useSelector(state => state.hebergements.filteredList)
    const [filter, setFilter] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllHebergements())
    }, [])

    const changeFilter = (e) => {
        setFilter(e.target.value)
    }
   
    return (
        <Container>
            <Form className="d-flex m-5" >
                <FormControl
                    type="text"
                    placeholder="Trouvez vos meilleurs hebergements "
                    className="me-2"
                    value={filter}
                    onChange={changeFilter.bind(this)}
                />
                <Button variant="outline-info">Rechercher</Button>
            </Form>
            <Row>
                {hebergementFiltered.filter(hebergement=>hebergement.title.includes(filter) || hebergement.adress.includes(filter) ).map(hebergement => (
                    <HebergementCard hebergement={hebergement} />
                ))}
            </Row>
        </Container>
    )
}



export default DisplayHebergements