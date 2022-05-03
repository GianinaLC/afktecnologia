import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { useContext, useState} from 'react'
import CartContext from '../../context/CartContext'

const ItemDetail = ({id, name, img, price, stock, description}) => {

    const [quantity, setQuantity]= useState(0)
    const { addItem, getQuantityProd, getQuantity } = useContext(CartContext)
    
    const handleOnAdd = (count) => {
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
                        { stock > 0 ? 
                            <ItemCount initial={getQuantityProd(id)} stock={stock} onAdd={handleOnAdd}/> 
                        : <h3 className='sinStock'>Sin Stock</h3>}
                    </div>
                    <p className="price">
                        ${price} <span style={{color:'grey', fontSize:'16px'}}>Stock: {stock}</span>
                    </p>
                    <div className={getQuantity() === 0 ? 'ocult' : 'goCart'}>
                            <Link to='/cart' ><span>Ir al carrito</span></Link>
                    </div>
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