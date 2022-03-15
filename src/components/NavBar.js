import './NavBar.scss';
import logo from '../images/MicroStore_Logo.svg';
import BuildIcon from '@mui/icons-material/Build';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

let iconColor = { color: '#17D7A0' };
let itemInCar = 2;

function NavBar() {
    return (
        <header className='header_sitio'>
            <div>
                <img src={logo} />
            </div>
            <nav>
                <ul>
                    <li>
                        Carrito
                        <Badge badgeContent={itemInCar} color="error">
                            <i style={iconColor}><ShoppingCartIcon /></i>
                        </Badge>
                    </li>
                    <li>
                        Usuario
                        <i style={iconColor}><AccountCircleIcon /></i>
                    </li>
                    <li>
                        Configuración
                        <i style={iconColor}><BuildIcon /></i>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
