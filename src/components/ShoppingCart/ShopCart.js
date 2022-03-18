import './ShopCart.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const ShoppingCart = ({items}) => {
    return (
        <Badge badgeContent={items} color="error">
            <i><ShoppingCartIcon /></i>
        </Badge>
    );
}

export default ShoppingCart;