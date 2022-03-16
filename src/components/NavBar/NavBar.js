import './NavBar.scss';
import logo from '../../images/MicroStore_Logo.svg';
import BuildIcon from '@mui/icons-material/Build';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCart from '../shoppingCart/ShopCart';

function NavBar() {
    return (
        <header className='header_sitio'>
            <div>
                <img src={logo} alt="Logo del sitio"/>
            </div>
            <nav>
                <ul>
                    <li>
                        Carrito
                        <ShoppingCart items={3} />
                    </li>
                    <li>
                        Usuario
                        <i><AccountCircleIcon /></i>
                    </li>
                    <li>
                        Configuración
                        <i><BuildIcon /></i>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
