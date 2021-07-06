import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './NavBar.css';


const NavBar = () => {
    return (
        <nav>
            <div className="logo"><Logo /></div>
            <div className="contenedor animation">
                <Link to="/">STORE</Link>
                <Link to="/nosotros">OUR STORY</Link>
                <Link to="/contacto">CONTACT</Link>
            </div>
            <div className="carrito">
                <Link to="/compras">
                    <i className="fas fa-shopping-cart fa-2x"></i>
                </Link>                
            </div>
        </nav>
    )
}

export default NavBar;