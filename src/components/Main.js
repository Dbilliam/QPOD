import React from 'react'
import Image from '../assets/images/music.png'
import { Link } from "react-router-dom";


function Main() {
    return (
        <>
            <section className="hero" id="home">
                    <div className="hero-content">
                        <h1 className="h1 hero-title">The most powerful audio streamer for devices</h1>
                        <button className="btn-primary">Download now</button>
                    </div>
                    <figure className="hero-banner"></figure>
                </section>
                <section className="download">
                    <ul className="download-list">
                        <li>
                            <Link to="/" className="download-link">
                                <ion-icon name="logo-apple"></ion-icon>
                                <span>Free downoad for iPhone</span>
                            </Link>
                        </li>
                        <li>
                            <image src={Image} alt="divider image" />
                        </li>
                        <li>
                        <Link to="/" className="download-link">
                                <ion-icon name="logo-android"></ion-icon>
                                <span>Free downoad for Android</span>
                            </Link>
                        </li>
                    </ul>
                </section>
        </>
    )
}

export default Main