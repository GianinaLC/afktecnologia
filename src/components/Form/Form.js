import { useContext, useState } from "react"
import './Form.css'
import Spinner from '../Spinner/Spinner'
import CartContext from "../../context/CartContext"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import { Link } from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"
import Cart from "../Cart/Cart"
import { useForm } from "react-hook-form"

const Form = () => {
    const [ input, setInput ] = useState({nombre: '', direccion: '', correo: '', telefono: ''})
    const [ loading, setLoading ] = useState(false)
    const [ orderId, setOrderId ] = useState(null)

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { cart, totalCost, clearCart } = useContext(CartContext)

    const onSubmit = (input) => {
        setInput(input)
    } 

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: {...input},
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
                <p> Su pedido ha sido enviado correctamente </p>
                <h3> Nro orden: { orderId }</h3>
                <div>
                    <Link to='/'> Volver al inicio </Link>
                </div>
            </div>
        )
    }
    
    if(loading) {
        return (
            <div className="confirmId">
                <h2> SE ESTÁ GENERANDO SU ORDEN </h2>
                < Spinner />
            </div>
        )
    }

    if (cart.length === 0) {
        return < Cart />
    }

    return (
        <div className='bgForm'>
            <div className='divCheckout'>
                <div className="cartForm">
                    <h3> Confirmación de la compra </h3>
                    { cart.map(prod => <ItemCart key={prod.id}{...prod} />) }
                    <h4 className="totalCostForm"> Total de la compra: $ {totalCost()}</h4>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="divForm">
                        <h3> Por favor ingrese sus datos </h3>
                        <label htmlFor="nombre"> Nombre </label>
                        <input {...register("nombre", { required: true , pattern:(/^[A-Za-z]+$/i ) })} />
                        { errors.nombre?.type === 'required' && <span className="messageError"> Ingrese Nombre </span> }
                        { errors.nombre?.type === 'pattern' && <span className="messageError"> Ingrese solo letras </span> }

                        <label htmlFor="direccion"> Dirección </label>
                        <input {...register("direccion", { required: true })} />
                        { errors.direccion?.type === 'required' && <span className="messageError"> Ingrese una dirección </span> }

                        <label htmlFor="telefono"> Teléfono </label>
                        <input {...register("telefono", { required: true, pattern: (/^[+]?([0-9]+(?:[0-9]*)?|\.[0-9]+)$/) })} />
                        { errors.telefono?.type === 'required' && <span className="messageError"> Ingrese un teléfono </span> }             
                        { errors.telefono?.type === 'pattern' && <span className="messageError"> Ingrese solo números </span> }

                        <label htmlFor="correo"> Correo </label>
                        <input {...register("correo", { required: true, pattern: (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) })} />
                        { errors.correo?.type === 'required' && <span className="messageError"> Ingrese un correo </span> }
                        { errors.correo?.type ===  "pattern" && <span className="messageError"> Ingrese un correo válido </span> }

                        <label htmlFor="correoConfirm"> Confirme correo </label>
                        <input {...register("correoConfirm", { required: true, pattern: (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) })} />
                        { errors.correoConfirm?.type === 'required' && <span className="messageError"> Ingrese un correo </span> }
                        { errors.correoConfirm?.type === 'pattern' && <span className="messageError"> Su correo no es válido </span> }
                    </div>

                    <div className="divButtonForm">
                        <div className="divButtonValidate">
                            <button className= {(input.correoConfirm === input.correo) ? 'hidden' : 'visible buttonValidateData' }> Validar datos </button>

                            <div style={{backgroundColor: '#000000a1', padding: '10px'}} className= {(input.correoConfirm == null || input.correoConfirm === input.correo) ? 'hidden' : 'visible messageError'} > 
                                El correo no coincide
                            </div>
                        </div>
                        
                        <button type="button" onClick= {() => createOrder()} 
                        className= {(input.correoConfirm === input.correo) ? 'buttonNeon' : 'hidden'} > Generar Orden </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form