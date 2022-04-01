import './ItemListContainer.css'
/* import Counter from '../ItemCount/ItemCount' */
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


    /* const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`)
    }  */

    return (
        <div>
            <h2>{props.greeting}</h2>
            {/* <Counter initial={1} stock={5} onAdd={handleOnAdd}/> */}
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer