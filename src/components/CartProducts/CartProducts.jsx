import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './CartProducts.css';

const CartProducts = ({producto}) => {

    const {title, thumbnail, price} = producto

    const[stock, setStock] = useState(10);



    return (
            
        <div className='space'>
            <div className="card_container">
                
                <ItemCount stock={stock}/>
                <div className="card_imgBox">
                    <h2>{title}</h2>
                    <div className="imagen">
                        <img src={thumbnail} alt="dije-saturno"/>
                    </div>
                    <span className="precio">$ {price}</span>
                    <a href="#!" className="boton">Agregar al Carrito</a>
                </div>
        
            </div>
        </div>
    )
}

export default CartProducts;
