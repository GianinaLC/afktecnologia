import { useState, useEffect} from 'react'
import { getItem } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [item, setItem] = useState()

    //const params = useParams() devuelve un objeto, entonces para no tener que escribir despues params.productId (props), lo desestructuro
    const {productId} = useParams()

    useEffect (()=>{
        /* getItem(productId).then(prod=>{
            setItem(prod)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        }) */

        
        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data()}
            setItem(product)
        })

        return (() => {
            setItem()
        })

    },[productId])
    

    return ( 
        <div className='detailContainer'>
            {   
                item ?
                    <ItemDetail {...item}/> 
                :
                <h2>El producto no existe</h2>
            }
        </div>
    )
}


export default ItemDetailContainer