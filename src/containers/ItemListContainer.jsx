import React, { useEffect, useState } from 'react';
import CartProducts from '../components/CartProducts/CartProducts';
import styled from '@emotion/styled';

//////////////////////////////
const Contenedor = styled.div`
  background: linear-gradient(to bottom, rgb(71, 123, 169), rgb(235, 231, 178));
  height: 100%;
  padding: 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: 1fr; 
  box-sizing: border-box;
`; 
////////////////////////////

const ItemListContainer = ({stock}) => {

    const [producto, setProductos] = useState([]);

  //Extraer los Datos
    useEffect(()=> {
        const consultarBase = async () => {
        const url = 'https://api.mercadolibre.com/sites/MLA/search?q=joyas';
        const respuesta = await fetch(url);
        const items = await respuesta.json();
        setProductos(items.results);
    }
    consultarBase();
  },[])

    return (
        <Contenedor>
            {producto.map(id => (
                <CartProducts stock={stock} producto={id} key={id.id}/>
            ))}
        </Contenedor>
    )
}

export default ItemListContainer;
