import './Item.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 

function Item(props) {
  //Props
  const { productId, productName, productDescription, productPrice, productImage, productStock } = props;
  const productAltText = productName.replace(/\s+/g, '_');

  return (
    <Card as={'article'} className='product-card'>
      <div className='img-container'>
        <Card.Img src={productImage} alt={productAltText} className='img-fluid' />
      </div>
      <Card.Body className='product-info text-start'>
        <Card.Title className='product-name'>{productName}</Card.Title>
        <p className='product-description'>{productDescription}</p>
        <p className='product-stock text-center'>En stock: {productStock}</p>
        <p className='product-price text-center'>${productPrice}</p>
        <div className='text-center product-button'>
          <Link to={'/products/' + productId}><Button>Ver producto</Button></Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;