import React from 'react';
import Logo from './Logo';
import './NavBar.css';


const NavBar = () => {
    return (
        <nav>
            <div className="logo"><Logo /></div>
            <div className="container animation">
                <a href="#!">STORE</a>
                <a href="#!">OUR STORY</a>
                <a href="#!">CONTACT</a>
            </div>
            <div className="carrito">
                <i className="fas fa-shopping-cart fa-2x"></i>
            </div>
        </nav>
    )
}

export default NavBar;