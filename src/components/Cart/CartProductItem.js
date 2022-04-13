import ItemCount from '../ItemCount/ItemCount';
import './CartProductItem.scss';
//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
//Contexto
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

function CartProductItem(props) {
    const { productId, productName, productPrice, quantityToAdd, productStock, productImage } = props.data;
    const [currentQuantity, setCurrentQuantity] = useState(quantityToAdd);
    const [totalPrice, setTotalPrice] = useState(0);
    const { productsOnCart, setProductsOnCart, productsCount, setProductsCount } = useContext(CartContext);

    function removeItem() {
        let result = productsOnCart.filter(item => item.productId !== productId);
        setProductsOnCart(result);
        setProductsCount(productsCount-1);
    }

    function estado() {
        console.log(productsOnCart)
    }

    useEffect(() => {
        setTotalPrice(productPrice * currentQuantity);
    }, [currentQuantity, productPrice])

    return (
        <article className='product-card' id={productId}>
            <div className='img-wrap'>
                <img src={productImage} alt='Imagen' />
            </div>
            <div>
                <h3>{productName}</h3>
                <div className='wrap'>
                    <ItemCount stock={productStock} initial={quantityToAdd} action={setCurrentQuantity} />
                    <p className='product-price'>${totalPrice}</p>
                </div>
            </div>
            <div>
                <button onClick={removeItem} className='btn-remove'><FontAwesomeIcon icon={faTrashCan} /></button>
                <button onClick={estado} className='btn-remove'>Estado</button>

            </div>
        </article>
    );
}

export default CartProductItem;