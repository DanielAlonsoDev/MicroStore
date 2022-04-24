import './NavBar.scss';
import logo from '../../Utils/images/MicroStore_Logo.svg';
import ShoppingCart from '../ShoppingCart/ShopCart';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//Mostrar el contenido del menu desplegable
const toggleMenu = () => {
    let menu = document.getElementById('mobile-menu').getElementsByTagName('ul').item(0);
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    }
    else {
        menu.style.display = 'none';
    }
}

//Esconder el contenido del menu desplegable
const hideMenu = () => {
    let menu = document.getElementById('mobile-menu').getElementsByTagName('ul').item(0);
    menu.style.display = 'none';
}

const NavBar = () => {
    return (
        <header id='header-sitio'>
            <div>
                <Link to={'/'}><img src={logo} alt="Logo del sitio" /></Link>
            </div>
            {/* Menu de escritorio */}
            <nav id='desktop-menu'>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/catalogue/all'>Catálogo</Link></li>
                    <li><Link to='/tracking '>Seguimiento</Link></li>
                    <li className='shop-cart'>
                        <Link to='/cart'>
                            <span>Carrito</span>
                            <ShoppingCart />
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* Menu dispositivos moviles */}
            <nav id='mobile-menu'>
                <FontAwesomeIcon onClick={toggleMenu} icon={faBars} />
                <ul>
                    <li><Link to='/' onClick={hideMenu}>Inicio</Link></li>
                    <li><Link to='/catalogue/all' onClick={hideMenu}>Catálogo</Link></li>
                    <li><Link to='/tracking ' onClick={hideMenu}>Seguimiento</Link></li>
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
