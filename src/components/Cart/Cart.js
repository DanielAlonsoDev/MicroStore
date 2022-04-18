import { Container } from 'react-bootstrap';
import './Cart.scss';
import CartProductsList from './CartProductsList';
import CartPriceDetails from './CartPriceDetails';
import ModalForm from './ModalForm';
import { useState, useEffect, useContext } from 'react';
//Contexto
import CartContext from '../../Context/CartContext';


function Cart(props) {
    const [modalToggle, setModalToggle] = useState(false);
    const { productsOnCart } = useContext(CartContext);

    function openModal() {
        if(productsOnCart.length !== 0) {
            setModalToggle(true);
        }
    }

    function closeModal() {
        setModalToggle(false);
    }

    return (
        <>
            {modalToggle ? (
                <ModalForm modalControl={closeModal} />
            ) : (
                <Container as={'main'} id='cart-layout'>
                    <CartProductsList />
                    <CartPriceDetails modalControl={openModal} />
                </Container>
            )}
        </>
    );
}

export default Cart;