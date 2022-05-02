import { useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom'
import { getItem} from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'

const ItemDetailContainer = () => {
    const [item, setItem] = useState()

    const {productId} = useParams()
    const [loading, setLoading] = useState(true)

    useAsync(
        setLoading,
        () => getItem(productId),
        setItem,
        () => console.log('Hubo un error en ItemDetailContainer')
        [productId]
    )

    if(loading) {
        return <div className='spinnerContainer'><p className='spinner'></p></div>
    }

    if(item.length === 0) {
        return <h2>El producto no existe</h2>
    }
    
    return ( 
        <div className='detailContainer'>
            <ItemDetail {...item}/> 
        </div>
    )
}


export default ItemDetailContainer