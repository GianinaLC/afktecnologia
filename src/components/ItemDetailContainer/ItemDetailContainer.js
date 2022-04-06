import { useState, useEffect} from 'react'
import { getItem } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    
    useEffect (()=>{
        getItem().then(prod=>{
            setItem(prod)
        })
    },[])

    return (
        <div className='detailContainer'>
            {(item != '')?<ItemDetail key={item.id}{...item}/>:<p></p>}
            {/* dejo vacío el párrafo para que me tome el primer string de (cargando..) que se efectúa en el itemListContainer */}
        </div>
    )
}


export default ItemDetailContainer