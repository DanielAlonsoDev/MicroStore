import './CartPriceDetails.scss';
//Contexto
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Context/CartContext';

function CartPriceDetails(props) {
    const { productsOnCart } = useContext(CartContext);
    const [subTotalPrice, setSubtotalPrice] = useState(0);
    const [taxesTotal, setTaxesTotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        let taxesResult = subTotalPrice * 0.19;
        setTaxesTotal(taxesResult);
        setTotalPrice(subTotalPrice + taxesResult);
    }, [subTotalPrice]);

    function updateSutotalPrice() {
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
            <button>Pagar</button>
        </section>
    );
}

export default CartPriceDetails;