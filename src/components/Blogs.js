import React from 'react'
import blog1 from '../assets/images/blog-1.jpg'
import blog2 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'
import { Link } from "react-router-dom";



function Blogs() {
    return (
        <>
        <main>
        <article className="container">
            <section class="blog" id="blog">
                <h2 class="h2 blog-title">Latest Blog & Stories</h2>
                <ul class="blog-list">
                    <li>
                        <Link to="/" class="blog-post">
                            <figure class="blog-banner">
                                <img src={blog1} alt="See How People Are Using Your Website With Hotjar" />
                                <time datetime="2022-02-05">05 Fab, 2022</time>
                            </figure>
                            <div class="blog-content">
                                <h3 class="h3 blog-post-title">See How People Are Using Your Website With Hotjar</h3>

                                <p class="blog-post-text">
                                    Each time a digital asset is purchased or sold, Sequoir donates a percentage
                                </p>
                            </div>
                       </Link>
                    </li>

                    <li>
                        <Link to="/" class="blog-post">
                            <figure class="blog-banner">
                                <img src={blog2} alt="5 Tips to Write Your Own Website Copy" />
                                <time datetime="2022-02-06">06 Fab, 2022</time>
                            </figure>
                            <div class="blog-content">
                                <h3 class="h3 blog-post-title">5 Tips to Write Your Own Website Copy</h3>
                                <p class="blog-post-text">
                                    Each time a digital asset is purchased or sold, Sequoir donates a percentage
                                </p>
                            </div>
                       </Link>
                    </li>

                    <li>
                        <Link to="/" class="blog-post">
                            <figure class="blog-banner">
                                <img src={blog3} alt="5 Brilliant Apps That Will Make Your Life Better" />
                                <time datetime="2022-02-10">10 Fab, 2022</time>
                            </figure>

                            <div class="blog-content">
                                <h3 class="h3 blog-post-title">5 Brilliant Apps That Will Make Your Life Better</h3>

                                <p class="blog-post-text">
                                    Each time a digital asset is purchased or sold, Sequoir donates a percentage
                                </p>
                            </div>

                       </Link>
                    </li>

                </ul>

            </section>
            </article>
            </main>

        </>
    )
}

export default Blogs