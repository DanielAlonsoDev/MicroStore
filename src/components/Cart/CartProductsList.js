import CartProductItem from './CartProductItem';
import './CartProductsList.scss';
import { useContext, useEffect } from 'react';
import CartContext from '../../Context/CartContext';

function CartProductsList(props) {
    const { productsOnCart, setProductsOnCart, setProductsCount } = useContext(CartContext);

    function cleanCart() {
        setProductsOnCart([]);
        setProductsCount(0);
    }

    useEffect(()=>{
        console.table(productsOnCart);
    }, [productsOnCart])

    return (
        <section id='cart-product-list'>
            {productsOnCart.map((item) => {
                return <CartProductItem key={item.productId} data={item} />;
            })}
            <button onClick={cleanCart}>Vaciar Carrito</button>

        </section>
    );
}

export default CartProductsList;