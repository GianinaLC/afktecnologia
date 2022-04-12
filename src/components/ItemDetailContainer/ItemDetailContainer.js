import { useState, useEffect} from 'react'
import { getItem } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)

    //const params = useParams() devuelve un objeto, entonces para no tener que escribir despues params.productId (props), lo desestructuro
    const {productId} = useParams()

    useEffect (()=>{
        getItem(productId).then(prod=>{
            setItem(prod)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setItem()
        })
    },[productId])
    

    return ( 
        <div className='detailContainer'>
            {   loading ?
                <div className='spinnerContainer'><p className='spinner'></p></div>
                :
                item ?
                    <ItemDetail {...item}/> 
                :
                <h2>El producto no existe</h2>
            }
            {/*  dejo vacío el párrafo para que me tome el primer string de (cargando..) que se efectúa en el itemListContainer  */}
        </div>
    )
}


export default ItemDetailContainer