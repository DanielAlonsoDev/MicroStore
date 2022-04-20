import './CartProductItem.scss';
//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
//Contexto
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';


const CartProductItem = (props) => {
    const { productId, productName, productPrice, quantityToAdd, productImage, productStock } = props.data;
    const [currentQuantity, setCurrentQuantity] = useState(quantityToAdd);
    const [totalPrice, setTotalPrice] = useState(productPrice * quantityToAdd);
    const { productsOnCart, setProductsOnCart } = useContext(CartContext);

    //Removemos el elemento del array de productos y del contador de productos
    const removeItem = () => {
        let result = productsOnCart.filter(item => item.productId !== productId);
        setProductsOnCart(result);
    }

    //Calculamos el precio total del producto
    useEffect(() => {
        setTotalPrice(productPrice * currentQuantity);
    }, [currentQuantity, productPrice]);

    useEffect(() => {
        let productList = productsOnCart;
        let index = productsOnCart.findIndex(item => item.productId === productId);
        productList[index].quantityToAdd = currentQuantity;
        setProductsOnCart([...productList]);

        if (currentQuantity === 0) {
            removeItem();
        }
    }, [currentQuantity]);

    return (
        <article className='product-card' id={productId}>
            <div className='img-wrap'>
                <img src={'/images/' + productImage} alt='Imagen' />
            </div>
            <div>
                <h3>{productName}</h3>
                <div className='wrap'>
                    <ItemCount stock={productStock} action={setCurrentQuantity} initial={currentQuantity} />
                    <div>
                    <p className='unit-price'>Unidad: ${productPrice}</p>
                    <p className='total-price'>Total: ${totalPrice}</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={removeItem} className='btn-remove'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        </article>
    );
}

export default CartProductItem;