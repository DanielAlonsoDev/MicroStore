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

let productList = [
  {name : 'Procesador Ryzen 9', description : 'AMD Ryzen 9 3900X 100-100000023BOX de 12 núcleos y 4.6GHz', price : 500000, stock : 3, image : image1},
  {name : 'Placa Madre Gigabyte H410m', description : 'Linea: Ultra Durable', price : 120000, stock : 5, image : image2},
  {name : 'Nvidia MSI Ventus XS', description : 'GTX 1650 D6 VENTUS XS OC OC Edition', price : 340000, stock : 6, image : image3}
];

function App() {
  return (
    <div className="App">
      <NavBar />

      <Container maxWidth="lg">
        <div className='card-container'>
          <ProdcutCard productName={productList[0].name} productDescription={productList[0].description} productPrice={productList[0].price} productStock={productList[0].stock} productImage={productList[0].image}/>
          <ProdcutCard productName={productList[1].name} productDescription={productList[1].description} productPrice={productList[1].price} productStock={productList[1].stock} productImage={productList[1].image} />
          <ProdcutCard productName={productList[2].name} productDescription={productList[2].description} productPrice={productList[2].price} productStock={productList[2].stock} productImage={productList[2].image} />
        </div>
      </Container>

    </div>
  );
}

export default App;
