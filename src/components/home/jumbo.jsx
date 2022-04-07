import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './home.scss';

function Jumbo() {
    return (
        <section className="jumbo-home animated fadeIn">
            <StaticImage
                src="../../images/jumbo-home.jpg"
                width={1920}
                quality={95}
                formats={["webp"]}
                alt="Home"
             
            />
            <div className="jumbo__box-text">
                <h2>Tendenze e Colore</h2>
                <mark>
                    Nel Boschetto della Mia fantasia <br />
                    Un fottio <br />
                    Di animaletti un po' matti
                </mark>
                <a href="#">Scopri la collezione</a>
            </div>
        </section>
    )
}

export default Jumbo