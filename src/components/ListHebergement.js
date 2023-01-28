import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from 'react-stars'
import { fetchAllHebergements } from '../redux/actions/hebergementActionCreators'

function ListHebergement() {
  const hebergements = useSelector(state => state.hebergements.all)
  const searchHebergementAdult = useSelector(state => state.searchHebergement.options.adult)
  const searchHebergementChild = useSelector(state => state.searchHebergement.options.children)
  const dates1 = useSelector(state => state.searchHebergement.dates)
  console.log({dates1})

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates1[0].endDate, dates1[0].startDate);
  console.log({days})
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllHebergements())
  }, [])

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  
  return (
    <Container>
      <Row>
        {hebergements.map(listHebergement => (
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={listHebergement.photo} class="img-fluid rounded-start" alt="image1" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title d-flex gap-2 ">
                    {`${listHebergement.title}:`}
                    <ReactStars
                      count={5}
                      value={listHebergement.rating}
                      onChange={ratingChanged}
                      size={24}
                      edit={false}
                    /></h5>
                  <p class="card-text">{listHebergement.description}</p>
                  <p class="card-text"><small class="text-muted">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    {listHebergement.adress}</small></p>
                  <p class="card-text border border-3 d-inline-flex p-2 text-dark bg-info ">

                    {`prix de ${days} nuits est: ${((searchHebergementAdult * listHebergement.prix) + (searchHebergementChild * listHebergement.prix / 2))*days} Dt `}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        )
        )}
      </Row>
    </Container>
  )

}
export default ListHebergement