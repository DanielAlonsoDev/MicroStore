import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


import './ItemDetails.scss';

function ItemDetails(props) {
    const { productName, productDescription, productPrice, productImage, productStock, productDetails } = props.productInfo;

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
                        <p className='details-price'>{ '$' + productPrice}</p>
                        <p className='details-stock'>{'Stock: ' + productStock}</p>
                        <p className='details-details'>{productDetails}</p>
                    </Col>
            </Row>
            </Container>
        </section>
    );
}

export default ItemDetails;