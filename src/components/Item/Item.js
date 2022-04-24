import './Item.scss';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//Contextos
import CartContext from '../../Context/CartContext';

const Item = (props) => {
  //Props   
  const { productId, productName, productDescription, productPrice, productImage, productStock } = props;
  const productAltText = productName.replace(/\s+/g, '_');
  //Definicion de estados
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const [stateProcess, setStateProcess] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const { addProductToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const data = { productId, productName, productPrice, productImage, productStock, quantityToAdd }

  const moveToPurchase = () => {
    navigate('/cart');
  }

  //Validamos la existencia del producto en el stock
  useEffect(() => {
    if (productStock === 0) {
      setOutOfStock(true);
    }
  }, [productStock])


  return (
    <Card as={'article'} className='product-card'>
      <div className='img-container'>
        <Card.Img src={'/images/' + productImage} alt={productAltText} className='img-fluid' />
      </div>
      <Card.Body className='product-info text-start'>
        <Card.Title className='product-name'>
          <Link to={'/item/' + productId}>{productName}</Link>
        </Card.Title>
        <p className='product-description'>{productDescription}</p>
        
        {//STOCK DEL PRODUCTO
          outOfStock ? <p className='product-stock text-center'>Agotado</p> : <p className='product-stock text-center'>En stock: {productStock}</p>
        }
        <p className='product-price text-center'>${productPrice}</p>

        {//CONTROLES DE LA COMPRA
          outOfStock ?
            (
              ''
            ) : (
              <>
                <div className='text-center product-counter'>
                  {/* Alternamos entre el itemCount y los elementos agregados al carrito */}
                  {stateProcess ? `${quantityToAdd} Agregados al  carrito` : <ItemCount stock={productStock} action={setQuantityToAdd} />}
                </div>
                <div className='text-center product-button'>
                  {/* Alternamos entre el boton de agregar y el boton de ir al carrito */}
                  {stateProcess ? <button className='move-purchase' onClick={moveToPurchase}>Ir al carrito</button> : <button className='move-purchase' onClick={() => addProductToCart(productId, quantityToAdd, setStateProcess, data)}>Agregar al carrito</button>}
                </div>
              </>
            )
        }
      </Card.Body>
    </Card>
  );
}

export default Item;