import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, img, price, stock, description }) => {
    const { addItem, getQuantityProd, getQuantity } = useContext(CartContext)
    
    const handleOnAdd = (count) => {

        const productObj = {
            id, name, price, quantity: count
        }

        addItem(productObj)
    }
    
    return(
        <div className="cardItemDetail">
            <div className='cardItemDetailText'>
                <div>
                    <img src={img} alt={name} className="cardImgDetail" />
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
                        $ {price} <span style={{color:'grey', fontSize:'16px'}}> Stock: {stock}</span>
                    </p>
                    <div className={getQuantity() === 0 ? 'hidden' : 'goCart'}>
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