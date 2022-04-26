import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import './Cart.css'

const Cart = () => {
    const { cart, totalCost, clearCart} = useContext(CartContext)
    if (cart.length === 0) {
        return (
            <div className="cartEmpty">
                <div className="textEmpty">
                    <div className="text">
                        <h2 style={{ fontFamily:'Rubik Glitch', fontSize:'60px'}}>Game Over</h2>
                        <p>Carrito  vacío</p>
                    </div>
                    <Link to={'/'} >Visita nuestra lista de producto </Link>
                </div>
            </div>
        )

    }

    return (
        <div className="cartBg">
            <div className="cartList">
                {cart.map(prod => <ItemCart key={prod.id}{...prod} />)}
            
                <div className="divButtons">
                    <p className="totalPrice">Total: {totalCost()}</p>
                    <button className="buttonNeon button" onClick={()=> clearCart()}>Vaciar carrito</button>
                    <button className="buttonNeon button2">Realizar compra</button>{/*  falta darle evento al boton*/}
                </div>
            </div>
            
        </div>
    )
}

export default Cart