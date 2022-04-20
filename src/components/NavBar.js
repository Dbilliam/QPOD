import React from 'react'
import Image from '../assets/images/logo.png'
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <header>
                <div className="container">
                    <NavLink to="#" className="logo">
                        <img src={Image} alt="Pod logo" />
                    </NavLink>
                    <nav className="navbar" data-navbar>
                        <button className="nav-close-btn" data-nav-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                        <ul className="navbar-list">
                            <li>
                                <NavLink to="/" className="navbar-link">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/features" className="navbar-link">Features</NavLink>
                            </li>
                            <li>
                                <NavLink to="/overview" className="navbar-link">Overview</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs" className="navbar-link">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pricing" className="navbar-link">Pricing</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="navbar-link">FAQ's</NavLink>
                            </li>
                            <li>
                                <button className="btn-primary">Get started</button>
                            </li>
                        </ul>
                    </nav>
                    <button className="nav-open-btn" data-nav-open-btn>
                        <ion-icon name="menu"></ion-icon>
                    </button>
                </div>
            </header>
        </>
    )
}

export default NavBar