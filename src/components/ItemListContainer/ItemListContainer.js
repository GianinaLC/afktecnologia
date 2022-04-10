import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) =>{

    const [products, setProducts] = useState([]) 
    const {categoryId} = useParams();
 
    useEffect (() => {
        getProducts(categoryId).then(prods => {
            //lo que recibo lo guardo en un estado = useState
            setProducts(prods)
        })
    },[categoryId])


    return (
        <div>
            <div className='imgFondo'>
                <div className='textFondo'>
                    <h2 className='titlePag'>{props.greeting}</h2>
                </div>
            </div>
            {(products.length > 0)?<ItemList products={products}/>:<p style={{fontSize:'20px', textAlign:'center'}}>Cargando...</p>}
        </div>
    )
}
export default ItemListContainer