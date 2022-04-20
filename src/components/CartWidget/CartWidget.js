import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';


const CartWidget = () =>{
    const { getQuantity } = useContext(CartContext)

    return (
            <div className='cartStyle'>
                <p><FaShoppingCart /> { getQuantity() }</p>
            </div>
            ) 
    }


export default CartWidget


