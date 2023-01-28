import React from 'react';
import { useRef } from "react";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'


import { FaMoneyBillWave } from 'react-icons/fa';
import { FaChild } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaDog } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchAllHebergements } from '../redux/actions/hebergementActionCreators';


function ButtonsFilter({ filter }) {
  const dispatch = useDispatch()
  const filterHotel = useRef(null);


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Container >
      <div className="buttonFilter d-flex justify-content-between align-items-center m-4" ref={filterHotel}>
        <Button variant="primary" className="rounded-pill m-2" size="lg"
          onClick={function () {
            scrollToSection(filterHotel)
            dispatch(fetchAllHebergements())
          }}>
          <i className="bi bi-card-list"></i>Tous</ Button>
        <Button variant="primary" className="rounded-pill m-2" size="lg"
          onClick={
            function () {
              scrollToSection(filterHotel)
              filter('familial')
            }}>
          < FaChild />Familial</Button>
        <Button variant="primary" className="rounded-pill m-2" size="lg"
          onClick={function () {
            scrollToSection(filterHotel)
            filter('romantiques')
          }}>
          <FaHeart />Romantique</Button>
        <Button variant="primary" className="rounded-pill m-2" size="lg"
          onClick={function () {
            scrollToSection(filterHotel)
            filter('économiques')
          }}>
          <FaMoneyBillWave />Economiques</ Button>


        <Button variant="primary" className="rounded-pill m-2" size="lg"
          onClick={function () {
            scrollToSection(filterHotel)
            filter('animaux autorisés')
          }} >
            <FaDog />Animaux autorisés</Button>

    </div>
    </Container >
  )
}




export default ButtonsFilter