import './NavBar.scss';
import logo from '../../Utils/images/MicroStore_Logo.svg';
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
