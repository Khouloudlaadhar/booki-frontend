import React from 'react'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
function About() {
    return (
        <div className="container aboutus">
            <div className="row">
                <div className="col-md-6 col-12 my-auto">
                    <img src={require('../images/about.png')} alt="about us" className="img-fluid" />
                </div>
                <div className="col-md-6 col-12 my-auto">
                    <h1 className="display-4 text-center my-5">À propos de nous: </h1>
                    <p className="lead text-justify text-center">Booki,votre agence de voyage en Tunisie en ligne vous propose des promotions sur vos voyages et séjours en Hammamet.</p>
                    <div className="text-center col-md-6 col-12 mx-auto">
                        <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">Contactez-nous</Link>
                    </div>
                </div>
            </div>
            <div className="about_company">
                <h1 className="display-4">À propos de Booki:</h1>
                <div className="pt-4">
                    <p className="about_info">Aujourd’hui, Booki est comblée au quotidien par ses milliers de clients et ses collaborateurs. Mais sa plus grande fierté est d’avoir suscité les vocations de tout un secteur et de concurrents… Booki,le leader mondial des voyages en ligne et services associés.</p>
                </div>
            </div>
            <div>
                <h1 className="display-4 mb-4">Ce que disent nos clients:</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={require('../images/customers/customer1.png')}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-dark">client 1</h3>
                            <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={require('../images/customers/customer2.png')}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-dark">client 2</h3>
                            <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={require('../images/customers/customer3.png')}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-dark">Client 3</h3>
                            <p className="text-dark"> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


            <div className="team">
                <h1 className="display-4">Notre équipe:</h1>
            </div>
            <div className="row mb-5">
                <div className="col-md-4 col-12 mx-auto my-2">
                    <div className="card border-0 shadow-lg p-4">
                        <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="director" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">Director</h5>
                            <div className="card-text text-black-50">CEO <p className="float-right">5 years</p>
                            </div>
                            <h6 className="mt-5">CONNECT</h6>
                            <div className="d-flex justify-content-around">
                                <FaFacebookSquare className="connect" />
                                <AiFillInstagram className="connect" />
                                <FaLinkedin className="connect" />
                                <IoLogoYoutube className="connect" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mx-auto my-2">
                    <div className="card border-0 shadow-lg p-4">
                        <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" alt="director" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">Team Member</h5>
                            <div className="card-text text-black-50">Manager <p className="float-right">4 years</p>
                            </div>
                            <h6 className="mt-5">CONNECT</h6>
                            <div className="d-flex justify-content-around">
                                <FaFacebookSquare className="connect" />
                                <AiFillInstagram className="connect" />
                                <FaLinkedin className="connect" />
                                <IoLogoYoutube className="connect" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mx-auto my-2">
                    <div className="card border-0 shadow-lg p-4">
                        <img src="https://source.unsplash.com/sNut2MqSmds/500x350" className="card-img-top" alt="director" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">Team Member</h5>
                            <div className="card-text text-black-50">Manager <p className="float-right">3 years</p>
                            </div>
                            <h6 className="mt-5">CONNECT</h6>
                            <div className="d-flex justify-content-around">
                                <FaFacebookSquare className="connect" />
                                <AiFillInstagram className="connect" />
                                <FaLinkedin className="connect" />
                                <IoLogoYoutube className="connect" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;