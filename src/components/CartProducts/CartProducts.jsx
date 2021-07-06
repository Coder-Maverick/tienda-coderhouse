import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './CartProducts.css';

const CartProducts = ({producto}) => {

    const {title, thumbnail, price, id} = producto

    const {itemId} = useParams();

    const[stock, setStock] = useState(10);
    const[item, setItem] = useState({
        id: '',
        titulo: '',
        precio: 0,
        img: ''
    });

    const verProducto = (id, title, thumbnail, price) => {
        setItem({
            id: id,
            titulo: title,
            precio: price,
            img: thumbnail
        });
    }

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
                    <Link to={`/item/:${itemId}`} className="boton" onClick={()=>verProducto(id, title, thumbnail, price)}>Ver Producto </Link>
                    {/* no se si estara bien pero quiero usar Context, para extraer el item y mandarlo a la pagina de detalle */}
                </div>
        
            </div>
        </div>
    )
}

export default CartProducts;
