// styles
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

// pages
import LandingPage from './pages/landing_page/LandingPage'
import About from './pages/about/About'
import WorkWithUs from './pages/work-with-us/WorkWithUs'
import ScrollToTop from './components/ScrollToTop'
import Products from './pages/products/Products'
import Product from './pages/product/Product'
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import CamisetasParaCongressos from './pages/camisetas-para-congressos/CamisetasParaCongressos';
import CrieSuaCamiseta from './pages/crie-sua-camiseta/CrieSuaCamiseta';
import ConfigurarCamisetasParaCongressos from './pages/configurar-camisetas-para-congressos/ConfigurarCamisetasParaCongressos';
// context
// import { ShoppingCartProvider } from './context/ShoppingCartContext'


function App() {

  return (
    <div className="App">

      {/* <ShoppingCartProvider> */}
        <BrowserRouter>
          <Navbar />
          <ShoppingCart />

          <ScrollToTop />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/workwithus' element={<WorkWithUs/>} />
            <Route path='/products/:category' element={<Products/>} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path='/camisetas-para-congressos' element={<CamisetasParaCongressos/>} />
            <Route path='/configurar-camisetas-para-congressos/:id' element={<ConfigurarCamisetasParaCongressos/>} />
            <Route path='/crie-sua-camiseta' element={<CrieSuaCamiseta/>} />
          </Routes>

          <Footer />
        </BrowserRouter>
      {/* </ShoppingCartProvider> */}

    </div>
  );
}

export default App;
