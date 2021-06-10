import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';


const NavBar = () => {
    return (
        <nav>
            <div className="logo"><CartWidget /></div>
            <div className="container animation">
                <a href="#!">STORE</a>
                <a href="#!">OUR STORY</a>
                <a href="#!">CONTACT</a>
            </div>
            <div className="carrito">Carrito</div>
        </nav>
    )
}

export default NavBar;