import * as React from 'react';
import { Container } from '@mui/material';
import { PaymentProvider } from './PaymentContext';
import Logo from './components/Logo';
import Title from './components/Title';
import Pix from './components/Pix';
import PixParcelado from './components/PixParcelado';
import Footer from './components/Footer';
import PixBarCode from './components/PixBarCode';
import PixContactForm from './components/PixContactForm'
import './App.css'


function App() {

  return (
    <>
    <PaymentProvider>
      <Container maxWidth="sm">
          <Logo />
          <Title 
            // text='como você quer pagar?'
            // text='pague a entrada de R$ 15.300,00 pelo Pix?'
            text='pague o restante em 1x no cartão'
          />
          <PixContactForm />
          {/* <PixBarCode /> */}
          {/* <Pix />
          <PixParcelado /> */}
          <Footer />
        </Container>
    </PaymentProvider>
    </>
  )
}

export default App
