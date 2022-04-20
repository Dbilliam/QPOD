import React from 'react'
import Image1 from '../assets/images/feature-banner-bg.png'
import Image2 from '../assets/images/feature-banner.png'


function Feature() {
  return (
    <>
      <main>
      <article className="container">
           <section className="features" id="features">
                    <ul className="features-list">
                        <li className="features-item">
                            <h3 className="h3 features-item-title">Apple AirPlay</h3>
                            <p className="features-item-text">
                                Each time a digital asset is purchased or sold, Sequoir is donates a percentage
                            </p>
                        </li>
                        <li className="features-item">
                            <h3 className="h3 features-item-title">SONOS Wireless HiFi</h3>
                            <p className="features-item-text">
                                Each time a digital asset is purchased or sold, Sequoir is donates a percentage
                            </p>
                        </li>
                    </ul>
                    <figure className="feature-banner">
                        <img src={Image1} alt="circle audio waveform" className="feature-banner-bg" />
                        <img src={Image2} alt="pod app" className="banner-img" />
                    </figure>

                    <ul className="features-list">

                        <li className="features-item">
                            <h3 className="h3 features-item-title">Samsung Multiroom</h3>

                            <p className="features-item-text">
                                Each time a digital asset is purchased or sold, Sequoir is donates a percentage
                            </p>
                        </li>

                        <li className="features-item">
                            <h3 className="h3 features-item-title">Strategy & Design</h3>

                            <p className="features-item-text">
                                Each time a digital asset is purchased or sold, Sequoir is donates a percentage
                            </p>
                        </li>

                    </ul>

                </section>
                </article>
                </main>
    </>
  )
}

export default Feature