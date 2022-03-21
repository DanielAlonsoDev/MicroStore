// ESTILOS
import './App.css';
import './components/style/main.scss'
//Components
import NavBar from './components/NavBar/NavBar';
import ProdcutCard from './components/ProductCard/ProductCard';
import image1 from './images/procesador.webp';
import image2 from './images/board.webp';
import image3 from './images/grafica.webp';
//Container
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Container maxWidth="lg">
        <div className='card-container'>
          <ProdcutCard productName='Procesador Ryzen 9' productDescription='AMD Ryzen 9 3900X 100-100000023BOX de 12 núcleos y 4.6GHz' productPrice={'500.000'} productStock={20} productImage={image1} />
          <ProdcutCard productName='Placa Madre Gigabyte H410m' productDescription='Linea: Ultra Durable' productPrice={'120.000'} productStock={15} productImage={image2} />
          <ProdcutCard productName='Nvidia MSI Ventus XS' productDescription='GTX 1650 D6 VENTUS XS OC OC Edition' productPrice={'340.000'} productStock={25} productImage={image3} />
        </div>
      </Container>

    </div>
  );
}

export default App;
