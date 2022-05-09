import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { useContext} from 'react'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'
import { FaCartPlus } from 'react-icons/fa';

const ItemDetail = ({ id, name, img, price, stock, description, severity }) => {
    
    const { addItem, getQuantityProd, getQuantity } = useContext(CartContext)

    const { setNotification } = useNotification()
    
    const handleOnAdd = (count) => {

        const productObj = {
            id, name, price, quantity: count
        }

        addItem(productObj)
        setNotification('success', <FaCartPlus />)
    }
    
    return(
        <div className="cardItemDetail">
            <div className='cardItemDetailText'>
                <div>
                    <img src={img} alt={name} className="cardImgDetail"/>
                </div>
                <div className='cardCount'>
                    <h3 className="titleDetailProd"> {name} </h3>
                    <div>
                        { 
                            stock > 0 ? 
                                <ItemCount initial={getQuantityProd(id)} stock={stock} onAdd={handleOnAdd} /> 
                            : <h3 className='sinStock'> Sin Stock </h3>
                        }
                    </div>
                    <p className="price">
                        ${price} <span style={{color:'grey', fontSize:'16px'}}> Stock: {stock}</span>
                    </p>
                    <div className={getQuantity() === 0 ? 'ocult' : 'goCart'}>
                        <Link to='/cart'><span> Ir al carrito </span></Link>
                    </div>
                </div>
            </div>
            <div className='cardDetailDescription'>
                <h3 className="titleDetailProd"> Descripción </h3>
                <p> {description} </p>
            </div>
        </div>
    )
}

export default ItemDetail