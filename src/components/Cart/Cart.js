import { Container } from 'react-bootstrap';
import './Cart.scss';
import CartProductsList from './CartProductsList';
import CartPriceDetails from './CartPriceDetails';


function Cart(props) {
    return(
        <Container as={'main'} id='cart-layout'>
            <CartProductsList />
            <CartPriceDetails />
        </Container>
    );
}

export default Cart;