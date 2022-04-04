// ESTILOS
import './App.css';
import './Utils/scss/main.scss'
//Components
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogue from './pages/Catalogue';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/catalogue' element={<Catalogue/>} />
          <Route path='/*' element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
