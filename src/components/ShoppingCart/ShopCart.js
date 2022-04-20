import './ShopCart.scss'
//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
//Dependencias
import { useContext, useEffect, useState } from 'react';
//Contextos
import CartContext from '../../Context/CartContext';

const ShoppingCart = () => {
    const { productsCount } = useContext(CartContext);
    const [shopCartCount, setShopCartCount] = useState();

    const showCount = () => {
        if(shopCartCount !== 0){
            return shopCartCount;
        }
    }

    useEffect(()=>{
        setShopCartCount(productsCount);
    }, [productsCount]);

    return (
        <i className='cart-notification'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{showCount()}</span>
        </i>
    );
}

export default ShoppingCart;