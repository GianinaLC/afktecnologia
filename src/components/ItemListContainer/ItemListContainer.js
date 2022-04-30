import './ItemListContainer.css'
import { useState, useEffect } from 'react'/* 
import { getProducts } from '../../asyncmock'  */
import { getDocs, collection, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'

const ItemListContainer = (props) =>{

    const [products, setProducts] = useState([]) 
    const [show, setShow] = useState(false)

    const {categoryId} = useParams();

    useEffect (() => {

        const collectionRef = categoryId 
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
            setShow(true)
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
            
                
            {   show ?
                ( products.length > 0 ? 
                    <ItemList products={products}/>
                
                :   <h3>No se encontraron productos</h3>
                )
                : <div className='spinnerContainer'><p className='spinner'></p></div>

            }
        </div>
    )
}
export default ItemListContainer