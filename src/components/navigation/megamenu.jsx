import React from 'react'
import './megamenu.scss'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

function Megamenu() {
    return (
        <div className='mega-menu'>
            <div className="container">
                <div className="item">
                    <div className="uomo">
                        <Link to="/prodotti/uomo">
                            <h2>uomo</h2>
                            <StaticImage
                                src="../../images/man.jpg"
                                width={300}
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="A Gatsby astronaut"
                                style={{ marginBottom: `1.45rem` }}
                            />
                        </Link>
                    </div>
                    <div className="donna">
                    <Link to="/prodotti/donna">
                        <h2>donna</h2>
                        <StaticImage
                            src="../../images/woman.jpg"
                            width={300}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                            style={{ marginBottom: `1.45rem` }}
                        />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Megamenu