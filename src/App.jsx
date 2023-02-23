import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound'
import Product from './components/Product'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App;
