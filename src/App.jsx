import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductComponent from './Components/ProductComponent'
import ProductDetails from './Components/ProductDetails'

function App() {
  return (
    <Router>
    <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<ProductComponent />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
        </Routes>
    </div>
    </Router>
  )
}

export default App
