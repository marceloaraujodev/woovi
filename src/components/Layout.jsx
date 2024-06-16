import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';
import { PaymentProvider } from '../PaymentContext';
import Logo from './Logo';
import Footer from './Footer';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 0 24px;
  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    margin: 0;
    padding: 0;
    margin-top: 5px;
  }
  ul a{
    text-decoration: none;
    transition: all .4s ease;
  }
  ul a:visited{
    color: #4D4D4D;
  }
  ul a:hover{
    opacity: .9;
  }
  ul li{
    list-style: none;
    cursor: pointer;
    font-size: 12px;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <PaymentProvider>
      <Nav>
        <ul>
        <NavLink to='/'><li>Pix Parcelado</li></NavLink>
        <NavLink to='/barcode'><li>QR Code</li></NavLink>
        <NavLink to='/form'><li>Form</li></NavLink>
        </ul>
      </Nav>
        <Container>
          <Logo />
          {children}
          <Footer />
        </Container>
      </PaymentProvider>
    </>
  );
}
