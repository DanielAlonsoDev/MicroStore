import './Item.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Item(props) {
  //Props
  const { productName, productDescription, productPrice, productImage, productStock } = props;
  const productAltText = productName.replace(/\s+/g, '_');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productImage} alt={productAltText}/>
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>
          <p>{productDescription}</p>
          <p>${productPrice}</p>
          <p>En stock: {productStock}</p>
        </Card.Text>
        <Button variant="primary">Ver producto</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;