
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllHebergements } from '../redux/actions/hebergementActionCreators'


function Hebergements() {

    const hebergements = useSelector(state => state.hebergements.all)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllHebergements())
      }, [])
    return (
        <>
            <div>hebergements</div>
            {
                hebergements.map(hebergement => (
                    <div key={hebergement._id} className='card m-4 p-4'>
                        <h1> {hebergement.title} </h1>
                    </div>
                ))
            }
        </>
    )
}



export default Hebergements