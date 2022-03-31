import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Hebergements() {
    const [hebergements, setHebergements] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/hebergements`)//http://localhost:5000/hebergements//
            .then(res => {
                setHebergements(res.data)
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