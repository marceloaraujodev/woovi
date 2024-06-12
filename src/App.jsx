import * as React from 'react';
import { Container } from '@mui/material';
import ButtonUsage from './components/button';
import Logo from './components/Logo';
import Title from './components/Title';

import './App.css'


function App() {

  return (
    <>
   <Container maxWidth="sm">
      {/* <h1>Hello, World!</h1>
      <p>This is a paragraph inside a Material-UI Container.</p>
      <ButtonUsage /> */}
      <Logo />
      <Title clientName="João" />
    </Container>
    </>
  )
}

export default App
