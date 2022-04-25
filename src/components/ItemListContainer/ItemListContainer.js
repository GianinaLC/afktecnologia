import './ItemListContainer.css'
import { useState, useEffect } from 'react'/* 
import { getProducts } from '../../asyncmock' */
import { getDocs, collection, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'

const ItemListContainer = (props) =>{

    const [products, setProducts] = useState([]) 
    const {categoryId} = useParams();
 
    useEffect (() => {
        /* getProducts(categoryId).then(prods => {
            //lo que recibo lo guardo en un estado = useState
            setProducts(prods)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        }) */

        //en query puedo agregar un tercer parametro limit(1), para hacer paginacion
        const collectionRef = categoryId 
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        })

    },[categoryId])

    if(products.length === 0) {
        return(
            <div className='spinnerContainer'><p className='spinner'></p></div>
        )
    }

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
                
            {   products ? 
                    <ItemList products={products}/>
                
                :   <h3>No se encontraron productos</h3>
            }
        </div>
    )
}
export default ItemListContainer