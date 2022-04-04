// ESTILOS
import './App.css';
import './components/style/main.scss'
//Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import AsideBar from './components/AsideBar/AsideBar';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Container as={'main'} id='main-layout'>
        <AsideBar />
        <ItemListContainer />
        <ItemDetailsContainer />
      </Container>

    </div>
  );
}

export default App;
