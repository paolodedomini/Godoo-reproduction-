import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
function CenterHome() {
    return (
        <section className="center-home">
            <div className="center-home__sx">
                <StaticImage
                    src="../../images/box-home-sx.jpg"
                    width={810}
                    quality={95}
                    formats={["webp"]}
                    alt="Home"

                />
                <Link to="prodotti/donna" className="center-home__box-text">

                    Autunno in arrivo

                </Link>

            </div>
            <div className="center-home__dx">
                <StaticImage
                    src="../../images/box-home-dx.jpg"
                    width={810}
                    quality={95}
                    formats={["webp"]}
                    alt="Home"

                />
                <Link to="prodotti/donna" className="center-home__box-text">

                    Black is the new Black

                </Link>

            </div>

        </section>
    )
}

export default CenterHome