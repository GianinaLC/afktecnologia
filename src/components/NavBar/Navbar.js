import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav className="Menu">
            <img src={'./images/afklogo1.png'} className="Logo-app" alt="logo" />
            <ul>
                <li>PC componentes</li>
                <li>Conectividad</li>
                <li>Accesorios</li>
            </ul>
            <CartWidget/>
            
        </nav>
    );
}

export default NavBar;

