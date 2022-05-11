import './ItemListContainer.css'
import { useState } from 'react'
import Spinner from '../Spinner/Spinner'
import ItemList from '../ItemList/ItemList'
import {useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = (props) =>{
    const [ products, setProducts ] = useState([]) 
    const [ loading, setLoading ] = useState(true)

    const { categoryId } = useParams();

    useAsync (
        setLoading,
        () => getProducts(categoryId),
        setProducts,
        () => console.log('Hubo un error en ItemListContainer'),
        [categoryId]
    )

    if (loading) {
        return < Spinner />
    }

    if (products.length === 0) {
        return <h2> No hay productos </h2>
    }

    return (
        <div>
            <div>
                <div className='imgFondo'>
                    <div className='textFondo'>
                        <h2 className='titlePag'> { props.greeting }</h2>
                        <h2 className='titlePag'> { categoryId }</h2>
                    </div>
                </div> 
            </div> 
             < ItemList products={ products } />
        </div>
    )
}

export default ItemListContainer