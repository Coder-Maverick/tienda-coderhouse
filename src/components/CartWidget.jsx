import React from 'react';
import logo from '../img/logo.png';
import styled from '@emotion/styled';

////////////////////////////
const Logo = styled.img`
    margin-left: 0rem;
    width: 180px;
    height: 80px;
`;
const CartWidget = () => {
    return (
            <Logo src={logo} alt="logo-malba" />
    )
}

export default CartWidget;
