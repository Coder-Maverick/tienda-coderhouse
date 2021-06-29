import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner/Spinner';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import styled from '@emotion/styled';

//////////////////////////////
const Detalle = styled.div`
  background: linear-gradient(to bottom, rgb(71, 123, 169), rgb(235, 231, 178));
  height: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center; 
  box-sizing: border-box;
`; 
////////////////////////////

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(false);

  //Extraer los Datos
    useEffect(()=> {
        const consultarBase = async () => {
            const url = 'https://api.mercadolibre.com/sites/MLA/search?q=joyas';
            const respuesta = await fetch(url);
            const items = await respuesta.json();
            setCargando(true);

            setTimeout(() => {
                setProducto(items.results[0]);
                setCargando(false);
            },2000)
        }
        consultarBase();
    },[])

    const componente = (cargando) ? <Spinner /> : <ItemDetail producto={producto} />

    return (
        <Detalle>
            {componente}
        </Detalle>
    )
}

export default ItemDetailContainer;
