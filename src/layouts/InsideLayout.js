import React from 'react'
import AppNavbarInside from '../Components/AppNavbarInside'

function InsideLayout(props) {
    return (
        <div >
          <AppNavbarInside/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default InsideLayout