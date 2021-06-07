import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div className="logo">Logo</div>
            <div className="container animation">
                <a>STORE</a>
                <a>OUR STORY</a>
                <a>CONTACT</a>
            </div>
            <div className="carrito">Carrito</div>
        </nav>
    )
}

export default NavBar;
