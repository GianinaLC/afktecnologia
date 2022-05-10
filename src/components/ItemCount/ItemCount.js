import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ initial = 1, stock = 0, onAdd }) => {
    const [ count, setCount ] = useState(initial)

    const decrement = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }

    return (
        <div className='containerCounter'>
            <div className='counter'> 
                <button onClick={decrement} className='buttonUpDown'> - </button>
                <p> { count } </p>
                <button onClick={increment} className='buttonUpDown'> + </button>
            </div>
            <button onClick={()=> onAdd(count)} className='buttonAddCart'> Agregar al carrito </button>
        </div>
    )
}

export default ItemCount