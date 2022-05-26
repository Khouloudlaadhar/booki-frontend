import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { useSelector } from 'react-redux'

function ListHebergementCard({listHebergement}) {
  console.log(listHebergement)
  const searchHebergementAdult = useSelector(state => state.searchHebergement.options.adult)
  const searchHebergementChild = useSelector(state => state.searchHebergement.options.children)
  const dates = useSelector(state => state.searchHebergement.dates)
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }
  
    const days = dayDifference(dates[0].endDate, dates[0].startDate);
    
    const priceChild =listHebergement.prix/2;
    const price = ((searchHebergementAdult*listHebergement.prix) + (searchHebergementChild*priceChild));
  return (
    <div className="card mb-3" >
    <div className="row g-0">
      <div className="col-md-4">
        <img src={listHebergement.photo} class="img-fluid rounded-start" alt="image1"/>
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
          <p class="card-text border border-3 d-inline-flex p-2 ">
           
          {`A partir de ${price}Dt`}
             </p>
          <p class="card-text"><small class="text-muted"> 
          <i className="bi bi-geo-alt-fill me-2"></i>
          {listHebergement.adress}</small></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ListHebergementCard