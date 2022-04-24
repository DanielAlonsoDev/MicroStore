import CartProductItem from './CartProductItem';
import './CartProductsList.scss';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartProductsList = (props) => {
    const { productsOnCart, setProductsOnCart } = useContext(CartContext);
    const [existProductsOnCart, setExistProductsOnCart] = useState(false);

    const cleanCart = () => {
        setProductsOnCart([]);
        setExistProductsOnCart(false);
    }

    //Alternamos entre la vista de carrito vacio y lista de productos
    useEffect(() => {
        if (productsOnCart.length !== 0) {
            setExistProductsOnCart(true);
        }

        return () => {
            setExistProductsOnCart(false);
        }
    }, [productsOnCart]);

    return (
        <section id='cart-product-list'>
            {existProductsOnCart ? (productsOnCart.map((item) => {
                return <CartProductItem key={item.productId} data={item} />;
            })) : (<p className='no-products-message'>No hay productos en el carrito</p>)}

            {existProductsOnCart ? <button className='btn-clean-cart' onClick={cleanCart}>Vaciar Carrito</button> : <Link to='/catalogue/all'><button className='btn-catalogue'>Ir al catalogo</button></Link>}

        </section>
    );
}

export default CartProductsList;