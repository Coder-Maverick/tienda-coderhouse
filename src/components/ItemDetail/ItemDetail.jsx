import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({stock, producto}) => {

    const {title, thumbnail, price, id} = producto;

    const [cantidadSelec, setCantidadSelec] = useState(false);

    const [cantidad, setCantidad] = useState(1);

    const agregarProducto = () => {
        const nuevaCantidad = cantidad + 1;
        if(nuevaCantidad > stock) return; 
        setCantidad(nuevaCantidad);
        setCantidadSelec(true);
        
    }
  //definir pagina siguiente
    const restarProducto = () => {
        const nuevaCantidad = cantidad - 1;
        if(nuevaCantidad === 0) return; 
        setCantidad(nuevaCantidad);
    }


    return (
        <div className="contenedor-modal">
            <div className="col-1">
                <h2  className="title">{title}</h2>
                <img src={thumbnail} className="img-big" alt={title} />
            </div>

            <div className="col-2">
                <div className="mostrar">
                    <ItemCount agregarProducto={agregarProducto} restarProducto={restarProducto} cantidad={cantidad} />
                </div>
                <div className="descripcion">
                    <h3 className="precio-producto">${price}</h3>
                    <p className="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet minima doloribus accusantium nihil placeat ex dignissimos nostrum pariatur. Quos nesciunt veritatis alias reprehenderit. Corporis necessitatibus quia in placeat excepturi. los detalles del producto y otros datos</p>
                    {
                    cantidadSelec ? <Link to="/compras" className="btn-carrito">Compra</Link>
                    : <button className="btn-carrito">Agregar al carrito</button>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
