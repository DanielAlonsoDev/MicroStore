import './CartPriceDetails.scss';
//Contexto
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Context/CartContext';

const CartPriceDetails = (props) => {
    const { productsOnCart, subTotalPrice, setSubtotalPrice, taxesTotal, setTaxesTotal, totalPrice, setTotalPrice } = useContext(CartContext);

    useEffect(() => {
        let taxesResult = subTotalPrice * 0.13;
        setTaxesTotal(taxesResult);
        setTotalPrice(subTotalPrice + taxesResult);
    }, [subTotalPrice]);

    const updateSutotalPrice = () => {
        let value = 0;
        productsOnCart.forEach(element => {
            value = value + (element.productPrice * element.quantityToAdd);
        });
        setSubtotalPrice(value);
    }

    useEffect(() => {
        updateSutotalPrice()
    }, [productsOnCart]);

    return (
        <section className='cart-price-details'>
            <h3>Resumen del pedido</h3>
            <article>
                <h4>Sub-total</h4>
                <p>${subTotalPrice}</p>
            </article>
            <article>
                <h4>Impuestos</h4>
                <p>${taxesTotal}</p>
            </article>
            <hr></hr>
            <article>
                <h4>Total</h4>
                <p>${totalPrice}</p>
            </article>
            <button onClick={props.modalControl}>Completar Compra</button>
        </section>
    );
}

export default CartPriceDetails;