import './ShopCart.scss'
//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
//Dependencias
import { useContext } from 'react';
//Contextos
import CartContext from '../../Context/CartContext';

const ShoppingCart = ({ items }) => {
    const { itemsOnCart } = useContext(CartContext);

    return (
        <i className='cart-notification'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{itemsOnCart}</span>
        </i>
    );
}

export default ShoppingCart;