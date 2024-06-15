import * as React from 'react';
import { Container } from '@mui/material';
import { PaymentProvider } from './PaymentContext';
import Logo from './components/Logo';
import Title from './components/Title';
import Pix from './components/Pix';
import PixParcelado from './components/PixParcelado';
import './App.css'


function App() {

  return (
    <>
    <PaymentProvider>
      <Container maxWidth="sm">
          <Logo />
          <Title />
          {/* <Pix /> */}
          <PixParcelado />
        </Container>
    </PaymentProvider>
    </>
  )
}

export default App
