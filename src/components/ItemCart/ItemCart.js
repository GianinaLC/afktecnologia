import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"

const ItemCart = () => {
    const { cart, totalCost, removeItem, clearCart} = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <>
                <h2>El carrito se encuentra vacío</h2>
                <Link to={'/'} >Visita nuestra lista de producto </Link>
            </>
        )

    }
    return (
        <>
            <ul>
                { cart.map(prod => <li key= {prod.id}> {prod.name} Cantidad: {prod.quantity} Precio unidad: $ {prod.price}  SubTotal: { prod.quantity * prod.price}  <button onClick={() => removeItem(prod.id)}>x</button> </li>)}
                Total: {totalCost()}
            </ul>
            
            <button onClick={()=> clearCart()}>Vaciar carrito</button>
            <button >Realizar compra</button>{/*  falta darle evento al boton*/}

        </>
    )
}

export default ItemCart