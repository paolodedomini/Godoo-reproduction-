import React from 'react'
import CartButton from '../cart/cartButton'
import Megamenu from './megamenu'
import { AnimateSharedLayout } from "framer-motion"
import { Link } from 'gatsby'
import { BsFacebook, BsInstagram, BsPhone, BsMailbox } from 'react-icons/bs'
import './navbar.scss'

function Navbar({ dataCart }) {
    return (
        <>
            <nav className='topbar'>
                <div className="dati-generali">
                    <ul>
                        <li><BsPhone /> 123456789</li>
                        <li><BsMailbox /> info@gcommerce.com</li>
                    </ul>
                </div>
                <ul className='social'>
                    <li><BsInstagram /></li>
                    <li><BsFacebook /></li>
                </ul>
            </nav>
            <nav>
                <Link to="/">
                    <div className="logo">G-Commerce</div>
                </Link>
                <ul className='main-menu'>
                    <li className='dropdown'>
                        Shop
                      <Megamenu />
                    </li>
                    <li><Link to="#">Azienda</Link></li>
                    <li><Link to="#">News</Link></li>
                    <li><Link to="#">Contatti</Link></li>

                </ul>
{dataCart &&
                <AnimateSharedLayout>
                    <CartButton dataCart={dataCart} />
                </AnimateSharedLayout>}

            </nav>
        </>
    )
}

export default Navbar