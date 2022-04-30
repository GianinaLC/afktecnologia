import { useContext, useState } from "react"
import './Form.css'
import CartContext from "../../context/CartContext"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc} from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import { Link } from "react-router-dom"

const Form = () => {
    const [input, setInput] = useState('')
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
            <div >
                <h1>CONFIRMACION</h1>
                <div>
                    Su pedido ha sido enviado correctamente
                </div>
                <h3>Nro orden: {orderId}</h3>
                <div>
                    <Link to='/'>Volver al inicio</Link>
                </div>
                
            </div>

        )
    }
    
    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='bgForm'>
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
                    <button onClick={() => createOrder()} className="Button">Generar Orden</button>
                </div>
            </div>
            <div></div>
        </form>
    )
}

export default Form