import './NavBar.scss';
import logo from '../../Utils/images/MicroStore_Logo.svg';
import ShoppingCart from '../ShoppingCart/ShopCart';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header className='header_sitio'>
            <div>
                <img src={logo} alt="Logo del sitio" />
            </div>
            <nav>
                <ul>
                    <li><Link to='/home'>Inicio</Link></li>
                    <li><Link to='/catalogue'>Catálogo</Link></li>
                    <li className='shop-cart'>
                        <span>Carrito</span>
                        <ShoppingCart />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
