import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ItemDetails.scss';

function ItemDetails(props) {
    const { productName, productDescription, productPrice, productImage, productStock, productDetails } = props.productInfo;

    return (
        <section id='details-section'>
            <Row>
                    <Col xs={12} md={6}>
                        <img src={productImage} alt={productName} />
                    </Col>
                    <Col xs={12} md={6} className='text-start'>
                        <h2 className='details-title'>{productName}</h2>
                        <p>{productDescription}</p>
                        <p>{productPrice}</p>
                        <p>Stock: {productStock}</p>
                        <p>{productDetails}</p>
                    </Col>
            </Row>
        </section>
    );
}

export default ItemDetails;