import './Item.scss';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//Contextos
import CartContext from '../../Context/CartContext';

function Item(props) {
  //Props   
  const { productId, productName, productDescription, productPrice, productImage, productStock } = props;
  const productAltText = productName.replace(/\s+/g, '_');
  //Definicion de estados
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const [stateProcess, setStateProcess] = useState(false);
  const { productsOnCart, productsCount, setProductsCount, setProductsOnCart } = useContext(CartContext);
  const navigate = useNavigate();

  const data = { productId, productName, productDescription, productPrice, productImage, productStock, quantityToAdd }

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
    <Card as={'article'} className='product-card'>
      <div className='img-container'>
        <Card.Img src={productImage} alt={productAltText} className='img-fluid' />
      </div>
      <Card.Body className='product-info text-start'>
        <Card.Title className='product-name'>
          <Link to={'/item/' + productId}>{productName}</Link>
        </Card.Title>
        <p className='product-description'>{productDescription}</p>
        <p className='product-stock text-center'>En stock: {productStock}</p>
        <p className='product-price text-center'>${productPrice}</p>
        <div className='text-center product-counter'>
          {stateProcess ? `${quantityToAdd} Agregados al  carrito` : <ItemCount stock={productStock} action={setQuantityToAdd} />}
        </div>
        <div className='text-center product-button'>
          {stateProcess ? <button className='move-purchase' onClick={moveToPurchase}>Completar Compra</button> : <button className='move-purchase' onClick={addToCart}>Agregar al carrito</button>}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;