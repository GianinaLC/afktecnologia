import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import './Cart.css'/* 
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index' */

const Cart = () => {

    const { cart, totalCost, clearCart} = useContext(CartContext)
    

    if (cart.length === 0) {
        return (
            <div className="cartEmpty">
                <div className="textEmpty">
                    <div className="textCartEmpty">
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
                    <p className="totalPrice">Total: $ {totalCost()}</p>
                    <button className="buttonNeon " onClick={()=> clearCart()}> Vaciar carrito</button>
                    <Link to={'/form'} className="buttonNeon" > Realizar compra</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Cart