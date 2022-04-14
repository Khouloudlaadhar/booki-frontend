import React from 'react'
import AppNavbar from '../Components/AppNavbar'

export default function OutsideLayout(props) {
    return (
        <div>
           <AppNavbar/>
            <div>
                {props.children}
            </div>
        </div>
    )

}
