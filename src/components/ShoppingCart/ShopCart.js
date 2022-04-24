import './ShopCart.scss'
//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
//Dependencias
import { useContext, useEffect, useState } from 'react';
//Contextos
import CartContext from '../../Context/CartContext';

const ShoppingCart = () => {
    const { productsOnCart } = useContext(CartContext);

    const showCount = () => {
        //Recorremos el objeto y sumamos los elementos del quantityToAdd
        if (productsOnCart.length !== 0) {
            let value = 0;
            for (let i = 0; i < productsOnCart.length; i++) {
                value = value + productsOnCart[i].quantityToAdd;
            }
            return value;
        } else {
            return '';
        }   
    }

    return (
        <i className='cart-notification'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{showCount()}</span>
        </i>
    );
}

export default ShoppingCart;