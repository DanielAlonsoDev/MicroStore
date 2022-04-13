import './CartPriceDetails.scss';

function CartPriceDetails(props) {
    return (
        <section className='cart-price-details'>
            <h3>Resumen del pedido</h3>
            <article>
                <h4>Sub-total</h4>
                <p>$24000</p>
            </article>
            <article>
                <h4>Envio</h4>
                <p>$1000</p>
            </article>
            <hr></hr>
            <article>
                <h4>Total</h4>
                <p>$25000</p>
            </article>
            <button>Pagar</button>
        </section>
    );
}

export default CartPriceDetails;