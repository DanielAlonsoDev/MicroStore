import './ShopCart.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const ShoppingCart = ({ items }) => {
    return (
        <i>
            <FontAwesomeIcon icon={faCartShopping} />
        </i>
    );
}

export default ShoppingCart;