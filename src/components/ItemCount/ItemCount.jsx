import React, { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({stock}) => {

    const [cantidad, setCantidad] = useState(1);

    const agregarProducto = () => {
        const nuevaCantidad = cantidad + 1;
        if(nuevaCantidad > stock) return; 
        setCantidad(nuevaCantidad);
    }
  //definir pagina siguiente
    const restarProducto = () => {
        const nuevaCantidad = cantidad - 1;
        if(nuevaCantidad === 0) return; 
        setCantidad(nuevaCantidad);
    }


    return (
        <ul className="cont_contador">
            <li><button className="boton-contador" onClick={restarProducto}><i className="fas fa-minus fa-2x"></i></button></li>
            <li><span className="contador">{cantidad}</span></li>
            <li><button className="boton-contador" onClick={agregarProducto}><i className="fas fa-plus size: fa-2x"></i></button></li>  
        </ul>
    )
}

export default ItemCount;
