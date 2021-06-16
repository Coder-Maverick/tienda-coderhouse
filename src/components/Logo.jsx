import React from 'react';
import logo from '../img/logo.png';
import styled from '@emotion/styled';

////////////////////////////
const Brand = styled.img`
    margin-left: 0rem;
    width: 180px;
    height: 80px;
`;
///////////////////////////

const Logo = () => {
    return (
        <a href="#!">
            <Brand src={logo} alt="logo-malba" />
        </a>
    )
}

export default Logo;
