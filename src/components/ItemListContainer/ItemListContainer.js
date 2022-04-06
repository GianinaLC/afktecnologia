import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) =>{

    const [products, setProducts] = useState([]) 

    useEffect (() => {
        getProducts().then(prods => {
            //lo que recibo lo guardo en un estado = useState
            setProducts(prods)
        })
    },[])


    return (
        <div>
            <h2 className='titlePag'>{props.greeting}</h2>{(products.length > 0)?<ItemList products={products}/>:<p style={{fontSize:'20px', textAlign:'center'}}>Cargando...</p>}
        </div>
    )
}
export default ItemListContainer