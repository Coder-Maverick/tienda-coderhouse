import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({producto}) => {

    const {title, thumbnail, price, id} = producto;

    return (
        <div className="contenedor-modal">
            <div className="col-1">
                <h2  className="title">{title}</h2>
                <img src={thumbnail} className="img-big" alt={title} />
            </div>

            <div className="col-2">
                <div className="mostrar">
                    <ItemCount />
                </div>
                <div className="descripcion">
                    <h3 className="precio-producto">${price}</h3>
                    <p className="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet minima doloribus accusantium nihil placeat ex dignissimos nostrum pariatur. Quos nesciunt veritatis alias reprehenderit. Corporis necessitatibus quia in placeat excepturi. los detalles del producto y otros datos</p>
                    <button className="btn-carrito">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
