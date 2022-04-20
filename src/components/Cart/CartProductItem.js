import './CartProductItem.scss';
//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
//Contexto
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

const CartProductItem = (props) => {
    const { productId, productName, productPrice, quantityToAdd, productImage } = props.data;
    const [currentQuantity] = useState(quantityToAdd);
    const [totalPrice, setTotalPrice] = useState(productPrice * quantityToAdd);
    const { productsOnCart, setProductsOnCart, productsCount, setProductsCount } = useContext(CartContext);

    //Removemos el elemento del array de productos y del contador de productos
    const removeItem = () => {
        let result = productsOnCart.filter(item => item.productId !== productId);
        setProductsOnCart(result);
        setProductsCount(productsCount - quantityToAdd);
    }

    //Calculamos el precio total del producto
    useEffect(() => {
        setTotalPrice(productPrice * currentQuantity);
    }, [currentQuantity, productPrice]);

    useEffect(() => {
        if (currentQuantity === 0) {
            removeItem();
        }
    }, [currentQuantity]);

    return (
        <article className='product-card' id={productId}>
            <div className='img-wrap'>
                <img src={'/images/' + productImage} alt='Imagen' />
            </div>
            <div>
                <h3>{productName}</h3>
                <div className='wrap'>
                    <p>{quantityToAdd} Agregados</p>
                    <p className='product-price'>Unidad: ${productPrice}</p>
                    <p className='product-price'>Total: ${totalPrice}</p>
                </div>
            </div>
            <div>
                <button onClick={removeItem} className='btn-remove'><FontAwesomeIcon icon={faTrashCan} /></button>

            </div>
        </article>
    );
}

export default CartProductItem;