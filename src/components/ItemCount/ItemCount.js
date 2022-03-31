import {useState, useEffect} from 'react'
import './ItemCount.css'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    useEffect (()=>{
        console.log('Se montó el componente')
    },[])

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

    console.log('se va a montar el componente')

    return (
        <div className='divCount'>
            <div>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
                <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
                
            </div>
        </div>
    )
}

export default Counter