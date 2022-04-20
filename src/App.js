// ESTILOS
import './App.css';
import './Utils/scss/main.scss'
//Components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogue from './pages/Catalogue';
import Home from './pages/Home';
import Error404 from './pages/Error404';

import Cart from './components/Cart/Cart';
//Contextos
import { CartProvider } from './Context/CartContext';

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <div id='page-container'>
            <NavBar />
            <div className='content-wrap'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalogue/:productCategoryParam' element={<Catalogue />} />
                <Route path='/*' element={ <Error404 />} />
                <Route path='/item/:productIdParam' element={<ItemDetailsContainer />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
