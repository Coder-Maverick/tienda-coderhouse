import React from 'react';
import logo from './logo.png';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

////////////////////////////
const Brand = styled.img`
    margin-left: 0rem;
    width: 180px;
    height: 80px;
`;
///////////////////////////

const Logo = () => {
    return (
        <Link to="/">
            <Brand src={logo} alt="logo-malba" />
        </Link>
    )
}

export default Logo;
