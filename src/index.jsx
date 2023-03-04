import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header';
import './components/styles/resets.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Header/>
    <App />
    <Footer />
  </React.StrictMode>
  </BrowserRouter>
);

