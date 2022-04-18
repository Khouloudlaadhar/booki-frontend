import React from 'react'
import AppNavbarInside from '../components/AppNavbarInside'

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