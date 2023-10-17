import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './pages/index.jsx';
import About from './pages/about.jsx';
import Product from './pages/product.jsx';
import Layout from './components/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<h2>404 - Not found page</h2>} />
      </Routes>
    </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
