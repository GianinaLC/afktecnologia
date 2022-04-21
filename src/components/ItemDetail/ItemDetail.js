import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { useContext, useState} from 'react'
import CartContext from '../../context/CartContext'

const ItemDetail = ({id, name, img, price, stock, description}) => {

    const [quantity, setQuantity]= useState(0)
    const { addItem, isInCart } = useContext(CartContext)
    
    const handleOnAdd = (count) => {
        console.log(count)
        setQuantity(count)

        const productObj = {
            id, name, price
        }

        addItem({...productObj, quantity: count})
    }
    
    return(
        <div className="cardDetail">
            <div className='cardDetailText'>
                <div>
                    <img src={img} alt={name} className="cardImgDetail"/>
                </div>
                <div className='cardCount'>
                    <h3 className="titleDetailProd">{name}</h3>
                    <div>
                        {quantity > 0 ? <Link to='/cart' className='goCart'><span>Ir al carrito</span></Link> : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>}
                    </div>
                    <p className="price">
                        ${price} <span style={{color:'grey', fontSize:'16px'}}>Stock: {stock}</span>
                    </p>
                </div>
            </div>
            <div className='cardDetailDescription'>
                <h3 className="titleDetailProd">Descripción</h3>
                <p>{description}</p>
            </div>
            
        </div>
    )

}

export default ItemDetail