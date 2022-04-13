import './ShopCart.scss'
//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
//Dependencias
import { useContext, useEffect, useState } from 'react';
//Contextos
import CartContext from '../../Context/CartContext';

const ShoppingCart = ({ items }) => {
    const { productsCount } = useContext(CartContext);
    const [shopCartCount, setShopCartCount] = useState();

    useEffect(()=>{
        setShopCartCount(productsCount);
    }, [productsCount]);

    return (
        <i className='cart-notification'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{shopCartCount}</span>
        </i>
    );
}

export default ShoppingCart;