import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound'
import Product from './components/Product'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
