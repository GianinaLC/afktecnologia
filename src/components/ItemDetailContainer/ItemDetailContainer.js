import { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [item, setItem] = useState()

    const {productId} = useParams()
    const [loading, setLoading] = useState(false)

    useEffect (()=>{
        
        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            const product = { id: response.id, ...response.data()}
            setItem(product)
            setLoading(true)
        })

        return (() => {
            setItem()
        })

    },[productId])
    

    return ( 
        <div className='detailContainer'>
            {   loading?

                (item ?
                    <ItemDetail {...item}/> 
                :
                <h2>El producto no existe</h2>
                ):
                <div className='spinnerContainer'><p className='spinner'></p></div>
            }
        </div>
    )
}


export default ItemDetailContainer