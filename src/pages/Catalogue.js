import AsideBar from '../components/AsideBar/AsideBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { Container } from 'react-bootstrap';

const Catalogue = (props) => {
    return (
        <Container as={'main'} id='main-layout'>
            <AsideBar />
            <ItemListContainer />
        </Container>
    );
}

export default Catalogue;