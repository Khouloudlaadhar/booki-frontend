import React from 'react'
import Button from 'react-bootstrap/Button'


import { FaMoneyBillWave } from 'react-icons/fa';
import { FaChild } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaDog } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchAllHebergements } from '../redux/actions/hebergementActionCreators';


function ButtonsFilter({filter }) {
  const dispatch = useDispatch()
  return (
    <div className="d-flex justify-content-between align-items-center m-4" >
    
      <Button variant="primary" className="rounded-pill m-2" size="lg"
        onClick={() => filter('économiques')}>
        <FaMoneyBillWave />Economiques</ Button>
      <Button variant="primary" className="rounded-pill m-2" size="lg"
        onClick={() => filter('familial')}>
        < FaChild />Familial</Button>
      <Button variant="primary" className="rounded-pill m-2" size="lg"
        onClick={() => filter('romantiques')}>
        <FaHeart />Romantique</Button>
      <Button variant="primary" className="rounded-pill m-2" size="lg"
        onClick={() => filter('animaux autorisés')}>
        <FaDog />Animaux autorisés</Button>
        <Button variant="primary" className="rounded-pill m-2" size="lg"
        onClick={() =>dispatch(fetchAllHebergements())}>
        <i className="bi bi-card-list"></i>Tous</ Button>
    </div>
  )
}




export default ButtonsFilter