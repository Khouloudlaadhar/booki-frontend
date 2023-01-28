import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import  Container  from 'react-bootstrap/Container';

const Footer = () => {
    return (
       
        <footer>
        <div class="container">
            <div>
            <span>Copyright &copy; Khouloud Laadhar</span>
            </div>
            <div id="social-media">
                <a to="https://www.facebook.com/khouloudlaadhar92">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a to="#">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div> 
    </footer>
       
    )
}
export default Footer