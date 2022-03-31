import './Item.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Item(props) {
  //Props
  const { productName, productDescription, productPrice, productImage, productStock } = props;
  const productAltText = productName.replace(/\s+/g, '_');

  return (
    <Card style={{ width: '18rem' }} className='product-card'>
      <div className='img-container'>
        <Card.Img src={productImage} alt={productAltText} className='img-fluid' />
      </div>
      <Card.Body className='product-info text-start'>
        <Card.Title className='product-name'>{productName}</Card.Title>
        <p className='product-description'>{productDescription}</p>
        <p className='product-stock text-center'>En stock: {productStock}</p>
        <p className='product-price text-center'>${productPrice}</p>
        <div className='text-end product-button'>
          <Button>Ver producto</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;