import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
//Contextos
import CartContext from '../../Context/CartContext';
import { useContext } from 'react';
import './ItemDetails.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const ItemDetails = (props) => {
    const { productName, productDescription, productPrice, productImage, productStock, productDetails, productId } = props.productInfo;
    //Definicion de Estados
    const [quantityToAdd, setQuantityToAdd] = useState(0);
    const [stateProcess, setStateProcess] = useState(false);
    const { addProductToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const data = { productId, productName, productPrice, productImage, productStock, quantityToAdd }

    const moveToPurchase = () => {
        navigate('/cart');
    }

    return (
        <Container as={'main'}>
            <Row>
                <Col xs={12} lg={6}>
                    <img src={'/images/' + productImage} alt={productName} />
                </Col>
                <Col xs={12} lg={6} className='text-start'>
                    <h2 className='details-title'>{productName}</h2>
                    <p className='details-description'>{productDescription}</p>
                    <p className='details-price'>{'$' + productPrice}</p>
                    <p className='details-stock'>{'Stock: ' + productStock}</p>
                    <p className='details-details'>{productDetails}</p>

                    <Row className='buttons-wrap'>
                        <Col>
                            {/* Alternamos entre el itemCount y los elementos agregados al carrito */}
                            {stateProcess ? `${quantityToAdd} Agregados al  carrito` : <ItemCount stock={productStock} action={setQuantityToAdd} />}
                        </Col>
                        <Col className='text-end'>
                            {/* Alternamos entre el boton de agregar y el boton de ir al carrito */}
                            {stateProcess ? <button className='move-purchase' onClick={moveToPurchase}>Ir al carrito</button> : <button className='move-purchase' onClick={() => addProductToCart(productId, quantityToAdd, setStateProcess, data)}>Agregar al carrito</button>}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetails;