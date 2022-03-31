import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllHebergements } from '../redux/actions/hebergementActionCreators'


function Hebergements() {

    const hebergements = useSelector(state => state.hebergements.all)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/hebergements`)//http://localhost:5000/hebergements
            .then(res => {
                dispatch(setAllHebergements(res.data))
            })
            .catch(err => {
                alert(err.message)
            })
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