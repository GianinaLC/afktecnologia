import { useState, useEffect} from 'react'
import { getItem } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    //const params = useParams() devuelve un objeto, entonces para no tener que escribir despues params.productId (props), lo desestructuro
    const {productId} = useParams()

    useEffect (()=>{
        getItem(productId).then(prod=>{
            setItem(prod)
        })
    },[productId])

    return ( /* ()=>{
        setItem()
    } */
        <div className='detailContainer'>
            {(item != '')?<ItemDetail {...item}/>:<p></p>}
            {/*  dejo vacío el párrafo para que me tome el primer string de (cargando..) que se efectúa en el itemListContainer  */}
        </div>
    )
}


export default ItemDetailContainer