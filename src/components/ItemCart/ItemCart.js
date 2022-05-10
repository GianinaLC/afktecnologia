import { useContext } from "react"
import CartContext from "../../context/CartContext"
import './ItemCart.css'

const ItemCart = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <>
            <div className='prodCart'>
                <p style={{width: '100px'}}> Cantidad: {quantity} </p>
                <p style={{width: '300px'}}> {name} </p>
                <p className='priceProd'> Precio unidad: $ {price} </p>
                <p className='subTotalProd'> SubTotal: $ <span> { quantity * price} </span> </p>
                <button className="removeButton" onClick={() => removeItem(id)}> x </button> 
            </div>
        </>
    )
}

export default ItemCart