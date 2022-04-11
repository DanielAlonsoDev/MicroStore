import './NavBar.scss';
import logo from '../../Utils/images/MicroStore_Logo.svg';
import ShoppingCart from '../ShoppingCart/ShopCart';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function toggleMenu() {
    let menu = document.getElementById('mobile-menu').getElementsByTagName('ul').item(0);
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    }
    else {
        menu.style.display = 'none';
    }
}

function hideMenu() {
    let menu = document.getElementById('mobile-menu').getElementsByTagName('ul').item(0);
    menu.style.display = 'none';

}

function NavBar() {

    return (
        <header id='header-sitio'>
            <div>
                <Link to={'/'}><img src={logo} alt="Logo del sitio" /></Link>
            </div>
            <nav id='desktop-menu'>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/catalogue/all'>Catálogo</Link></li>
                    <li className='shop-cart'>
                        <span>Carrito</span>
                        <ShoppingCart />
                    </li>
                </ul>
            </nav>
            <nav id='mobile-menu'>
                <FontAwesomeIcon onClick={toggleMenu} icon={faBars} />
                <ul>
                    <li><Link to='/' onClick={hideMenu}>Inicio</Link></li>
                    <li><Link to='/catalogue/all' onClick={hideMenu}>Catálogo</Link></li>
                    <li className='shop-cart' onClick={hideMenu}>
                        <Link to='/cart'>
                            <span>Carrito</span>
                            <ShoppingCart />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
