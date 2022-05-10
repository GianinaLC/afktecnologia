import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    const { getQuantity } = useContext(CartContext)

    return (
        <div className={getQuantity() === 0 ? 'hidden' : 'cartStyle'}>
            <Link to='/cart'> <FaShoppingCart /> {getQuantity()} </Link>
        </div>
        ) 
    }

export default CartWidget


