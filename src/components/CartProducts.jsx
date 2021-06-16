import React, { useState } from 'react';
import ItemCount from './ItemCount';
import './CartProducts.css';

const CartProducts = () => {

    const[stock, setStock] = useState(10);

    return (
    
        <div className="card_container">
            <ItemCount stock={stock}/>
            <div className="card_imgBox">
                <h2>Dije Saturno</h2>
                <div className="imagen">
                    <img src="../img/dije-saturno.jpg" alt="dije-saturno"/>
                </div>
                <span className="precio">$ 310</span>
                <a href="#!" className="btn">Agregar al Carrito</a>
            </div>

        </div>
    )
}

export default CartProducts;
