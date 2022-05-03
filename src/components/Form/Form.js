import { useContext, useState } from "react"
import './Form.css'
import CartContext from "../../context/CartContext"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc} from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import { Link } from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"
import Cart from "../Cart/Cart"


const Form = () => {
    const [input, setInput] = useState({nombre: '', direccion: '', correo: '', telefono: ''})
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const { cart, totalCost, clearCart} = useContext(CartContext)


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
      }


    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: input,
            productsOrder: cart.map(prod => { return ({ id: prod.id, name: prod.name, quantity: prod.quantity, priceUni: prod.price }) }),
            total: totalCost(),
            date: new Date
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                const orderId = id
                clearCart()
                return setOrderId(orderId)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    
    }

    if (orderId) {
        return (
             <div className='confirmId'>
                <h2> CONFIRMACIÓN </h2>
                <p> Su pedido ha sido enviado correctamente  </p>
                <h3>Nro orden: {orderId}</h3>
                <div>
                    <Link to='/'>Volver al inicio</Link>
                </div>
            </div>
        )
    }
    
    if(loading) {
        return (
            <div className='spinnerContainer'>
                <h3>Se esta generando su orden</h3>
                <p className='spinner'></p>
            </div>
            )

    }

    if (cart.length === 0) {
        return <Cart/>
    }

    

    return (
        <form onSubmit={handleSubmit} className='bgForm'>
            <div className='divCheckout'>
                <div className="cartForm">
                    <h3>Confirmación de la compra</h3>
                    {cart.map(prod => <ItemCart key={prod.id}{...prod} />)}
                    <h4 className="totalCostForm">Total de la compra: $ {totalCost()}</h4>
                </div>
                <div className='divForm'>
                    <h3>Por favor ingrese sus datos</h3>
                    <label>Nombre:
                        <input type='text' 
                            onChange={handleChange}
                            name="nombre"
                            value={input.nombre}
                        />
                    </label>

                    <label>Correo:
                    <input type='text' 
                            onChange={handleChange}
                            name="correo"
                            value={input.correo}
                        />
                    </label>

                    <label>Dirección:
                    <input type='text' 
                            onChange={handleChange}
                            name="direccion"
                            value={input.direccion}
                        />
                    </label>

                    <label>Teléfono:
                    <input type="text" 
                            onChange={handleChange}
                            name="telefono"
                            value={input.telefono}
                        />
                    </label>
                    <button onClick={() => createOrder()} className="buttonNeon">Generar Orden</button>
                </div>
            </div>
        </form>
    )
}

export default Form