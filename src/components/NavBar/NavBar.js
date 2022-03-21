import './NavBar.scss';
import logo from '../../images/MicroStore_Logo.svg';
import BuildIcon from '@mui/icons-material/Build';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCart from '../ShoppingCart/ShopCart';

function NavBar() {
    return (
        <header className='header_sitio'>
            <div>
                <img src={logo} alt="Logo del sitio"/>
            </div>
            <div className='shop-cart'>
                <span>Carrito</span>
                <i><ShoppingCart items={1}/></i>
            </div>
        </header>
    );
}

export default NavBar;
