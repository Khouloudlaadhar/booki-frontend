import React from 'react'
import AppNavbar from '../components/AppNavbar'

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
