import React from 'react'
import { Table } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { FaBeer } from 'react-icons/fa';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { BiGift } from 'react-icons/bi';
import { BiRestaurant } from 'react-icons/bi';

function Services() {

    return (

        <Card className="shadow-lg p-3 mb-5 bg-body">
            <div className="m-3">
                <h3 className='text-decoration-underline'>Services & équipements:</h3>
                <Table striped bordered hover >

                    <tbody>
                        <tr>
                            <td><i className=" pe-2 bi bi-cast"></i><span>Climatisation</span></td>
                            <td><i className="pe-2 bi bi-telephone"></i><span>Téléphone </span></td>
                            <td><i className="pe-2 bi bi-tv"></i><span>Télévision</span></td>
                        </tr>

                        <tr>
                            <td><FaUmbrellaBeach /><span className='ps-2'>Plage</span></td>
                            <td><FaSpotify /><span className='ps-2'>Tennis</span></td>
                            <td><i className="pe-2 bi bi-currency-exchange"></i>Change</td>

                        </tr>
                        <tr>
                            <td><FaBeer /><span className='ps-2'>Bar</span></td>
                            <td><FaCoffee /><span className='ps-2'>Cofee</span></td>
                            <td><BiRestaurant /><span className='ps-2'>Restaurat</span></td>
                        </tr>
                        <tr>
                            <td><i className="pe-2 bi bi-file-music-fill"></i>Musique</td>
                            <td><i className="pe-2 bi bi-asterisk"></i>Salle de réunion</td>
                            <td><BiGift /><span className='ps-2'>Boutique de cadeaux</span></td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </Card>

    )
}
export default Services