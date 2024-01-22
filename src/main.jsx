import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './pages/index.jsx';
import About from './pages/about.jsx';
import Product from './pages/product.jsx';
import Layout from './components/Layout.jsx';
import ShoppingCard from './pages/shopping-card.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-nqx4on6mv028ejjo.us.auth0.com"
      clientId="IgxlRSAwaLkDG448Wl3I9z3NTQaYozvC"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/shopping-card' element={<ShoppingCard />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<h2>404 - Not found page</h2>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
