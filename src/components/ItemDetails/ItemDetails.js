import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
//Contextos
import CartContext from '../../Context/CartContext';
import { useContext } from 'react';



import './ItemDetails.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from 'react';

function ItemDetails(props) {
    const { productName, productDescription, productPrice, productImage, productStock, productDetails, productId } = props.productInfo;
    //Definicion de Estados
    const [currentStock, setCurrentStock] = useState(0);
    const [quantityToAdd, setQuantityToAdd] = useState(0);
    const [stateProcess, setStateProcess] = useState(false);
    const { productsOnCart, productsCount, setProductsCount, setProductsOnCart } = useContext(CartContext);
    const navigate = useNavigate();

    const data = { productId, productName, productDescription, productPrice, productImage, productStock, quantityToAdd }

    useEffect(() => {
        setCurrentStock(productStock);
    }, [productStock]);

    function addToCart() {
        if (quantityToAdd > 0) {
            let existInCart = false;
            for (let i = 0; i < productsOnCart.length; i++) {
                if (productsOnCart[i].productId === productId) {
                    existInCart = true;
                }
            }

            if (existInCart !== true) {
                setStateProcess(true);
                setCurrentStock(currentStock - quantityToAdd);
                setProductsOnCart(productsOnCart => [...productsOnCart, data]);
                setProductsCount(productsCount + 1);
            }
            else {
                alert('El producto ya se encuentra en el carrito');
            }
        }
    }

    function moveToPurchase() {
        navigate('/cart');
    }

    return (
        <section id='details-section'>
            <Container as={'main'}>
                <Row>
                    <Col xs={12} lg={6}>
                        <img src={productImage} alt={productName} />
                    </Col>
                    <Col xs={12} lg={6} className='text-start'>
                        <h2 className='details-title'>{productName}</h2>
                        <p className='details-description'>{productDescription}</p>
                        <p className='details-price'>{'$' + productPrice}</p>
                        <p className='details-stock'>{'Stock: ' + currentStock}</p>
                        <p className='details-details'>{productDetails}</p>

                        <Row>
                            <Col>
                                {stateProcess ? `${quantityToAdd} Agregados al  carrito` : <ItemCount stock={productStock} action={setQuantityToAdd} />}
                            </Col>
                            <Col className='text-end'>
                                {stateProcess ? <button className='move-purchase' onClick={moveToPurchase}>Completar Compra</button> : <button className='move-purchase' onClick={addToCart}>Agregar al carrito</button>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ItemDetails;