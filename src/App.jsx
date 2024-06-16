import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'
import PixBarCode from './components/PixBarCode';
import PixContactForm from './components/PixContactForm';
import PaymentContext from './PaymentContext';
import './App.css'


function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/barcode' element={<PixBarCode />} />
          <Route exact path='/form' element={<PixContactForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
