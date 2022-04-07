import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
function CategorieHome() {
    return (
        <section className="categorie-home animated fadeIn">
            <div className="categoria ">
                <StaticImage
                    src="../../images/cat-donna.jpg"
                    width={530}
                    quality={95}
                    formats={["webp"]}
                    alt="Home" />
                <Link to="prodotti/donna" className="box-text">
                    Donna
                </Link>
            </div>
            <div className="categoria">

                <StaticImage
                    src="../../images/cat-uomo.jpg"
                    width={530}
                    quality={95}
                    formats={["webp"]}
                    alt="Home" />
                <Link to="prodotti/donna" className="box-text">
                    Uomo
                </Link>
            </div>

            <div className="categoria">
                <StaticImage
                    src="../../images/cat-accessori.jpg"
                    width={530}
                    quality={95}
                    formats={["webp"]}
                    alt="Home" />
                <Link to="prodotti/donna" className="box-text">
                    Accessori
                </Link>
            </div>
        </section>
    )
}

export default CategorieHome
