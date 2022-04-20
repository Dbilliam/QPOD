import React from 'react'
import overviewBanner from '../assets/images/overview-banner.png'

function Overview() {
    return (
        <>
        <main>
      <article className="container">
            <section className="overview" id="overview">
                <div className="overview-card">
                    <figure className="overview-banner">
                        <img src={overviewBanner} alt="overview banner" />
                    </figure>
                    <div className="overview-content">
                        <h2 className="h2 overview-title">Enjoy your music everywhere!</h2>
                        <p className="overview-text">
                            Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
                            development
                        </p>
                        <ul className="overview-list">
                            <li className="overview-item">
                                <ion-icon name="wifi"></ion-icon>
                                <span>Works exactly like original <strong>Apple AirPlay</strong></span>
                            </li>
                            <li className="overview-item">
                                <ion-icon name="musical-notes"></ion-icon>
                                <span><strong>AirAudio recognizes</strong> if you are listening to your music</span>
                            </li>
                            <li className="overview-item">
                                <ion-icon name="star"></ion-icon>
                                <span><strong>Create shortcuts</strong> for your favorite receivers</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            </article>
            </main>
        </>
    )
}

export default Overview