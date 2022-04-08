import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


import './ItemDetails.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

function ItemDetails(props) {
    const { productName, productDescription, productPrice, productImage, productStock, productDetails } = props.productInfo;
    const [quantityToAdd, setQuantityToAdd] = useState(0);
    const navigate = useNavigate();

    function onAdd() {
        if (quantityToAdd < productStock) {
            setQuantityToAdd(quantityToAdd + 1);
        }
    }

    function onRemove() {
        if (quantityToAdd > 0) {
            setQuantityToAdd(quantityToAdd - 1);
        }
    }

    function moveToPurchase() {
        alert('Estas listo para avanzar en el proceso de compra');
        navigate('/cart');
    }

    return (
        <section id='details-section'>
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <img src={productImage} alt={productName} />
                    </Col>
                    <Col xs={12} lg={6} className='text-start'>
                        <h2 className='details-title'>{productName}</h2>
                        <p className='details-description'>{productDescription}</p>
                        <p className='details-price'>{'$' + productPrice}</p>
                        <p className='details-stock'>{'Stock: ' + productStock}</p>
                        <p className='details-details'>{productDetails}</p>
                        <Row>
                            <Col>
                                <ItemCount count={quantityToAdd} actionDecrease={onRemove} actionIncrease={onAdd} />
                            </Col>
                            <Col className='text-end'>
                                <button className='move-purchase' onClick={moveToPurchase}>Completar Compra</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ItemDetails;