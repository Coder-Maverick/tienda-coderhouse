import React from 'react';
import CartProducts from './CartProducts';
import styled from '@emotion/styled';

//////////////////////////////
const Container = styled.div`
  background: linear-gradient(to bottom, rgb(71, 123, 169), rgb(235, 231, 178));
  height: 100vh;
  padding: 30px;
  display: flex;
  justify-content: space-around;
`; 
////////////////////////////

const ItemListContainer = ({stock}) => {
    return (
        <Container>
            <CartProducts stock={stock}/>
            <CartProducts stock={stock}/>
            <CartProducts stock={stock}/>
            <CartProducts stock={stock}/>
        </Container>
    )
}

export default ItemListContainer;
