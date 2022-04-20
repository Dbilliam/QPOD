import React from 'react'
import logo from '../assets/images/logo.png'
import footer1 from '../assets/images/footer-1.png'
import footer2 from '../assets/images/footer-2.png'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <div class="container">
                    <div class="footer-brand">
                       <Link to="/" class="footer-logo">
                            <img src={logo} alt="pod logo" />
                       </Link>
                        <p>Follow us on</p>
                        <ul class="social-list">
                            <li>
                               <a href="https://github.com/rakesh-barman" class="social-link">
                                    <ion-icon name="logo-youtube"></ion-icon>
                               </a>
                            </li>
                            <li>
                               <a href="https://github.com/rakesh-barman" class="social-link">
                                    <ion-icon name="logo-github"></ion-icon>
                               </a>
                            </li>
                            <li>
                               <a href="https://github.com/rakesh-barman" class="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                               </a>
                            </li>
                            <li>
                               <a href="https://github.com/rakesh-barman" class="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                               </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-link-box">
                        <ul class="footer-list">
                            <li>
                                <h3 class="h5 footer-item-title">Company</h3>
                            </li>
                            <li>
                               <Link to="/" class="footer-link">About Us</Link>
                            </li>
                            <li>
                               <Link to="/" class="footer-link">Features</Link>
                            </li>

                            <li>
                               <Link to="/" class="footer-link">Pricing</Link>
                            </li>
                        </ul>

                        <ul class="footer-list">
                            <li>
                                <h3 class="h5 footer-item-title">Products</h3>
                            </li>
                            <li>
                               <Link to="/" class="footer-link">Blog</Link>
                            </li>
                            <li>
                               <Link to="/" class="footer-link">Help Center</Link>
                            </li>
                            <li>
                               <Link to="/" class="footer-link">Contact</Link>
                            </li>
                        </ul>

                        <ul class="footer-list">

                            <li>
                                <h3 class="h5 footer-item-title">Resources</h3>
                            </li>
                            <li>
                               <Link to="/" class="footer-link">FAQ’S</Link>
                            </li>
                            <li>
                               <Link to="/" class="footer-link">Testimonial</Link>
                            </li>
                            <li>
                               <Link to="/" class="footer-link">Terms & Conditions</Link>
                            </li>

                        </ul>

                        <div class="footer-btn-group">
                           <Link to="/">
                                <img src={footer1} alt="apple store" />
                           </Link>
                           <Link to="/">
                                <img src={footer2} alt="google play store" />
                           </Link>
                        </div>
                    </div>
                </div>
                <p class="copyright">&copy; Copyrights 2022 QPod All rights reserved.</p>

            </footer>
        </>
    )
}

export default Footer