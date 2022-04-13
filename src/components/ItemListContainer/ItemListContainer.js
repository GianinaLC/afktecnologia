import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) =>{

    const [products, setProducts] = useState([]) 
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams();
 
    useEffect (() => {
        getProducts(categoryId).then(prods => {
            //lo que recibo lo guardo en un estado = useState
            setProducts(prods)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

    },[categoryId])


    return (
        <div>
            
                <div>
                    <div className='imgFondo'>
                        <div className='textFondo'>
                            <h2 className='titlePag'>{props.greeting}</h2>
                            <h2 className='titlePag'>{categoryId}</h2>
                        </div>
                    </div> 

                </div>
                
                {loading ? 
                    <div className='spinnerContainer'><p className='spinner'></p></div>
                :
                products ? 
                        <ItemList products={products}/>
                    
                    :   <h3>No se encontraron productos</h3>
            }
        </div>
    )
}
export default ItemListContainer