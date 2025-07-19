import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import './App.css'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
         <Route path='/' element={<ProductList/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    <Toaster />
    </>
  )
}

export default App
