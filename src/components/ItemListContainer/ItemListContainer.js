import './ItemListContainer.css'
import Counter from '../ItemCount/ItemCount'

const ItemListContainer = (props) =>{

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`)
    } 

    return (
        <div>
            <h2>{props.greeting}</h2>
            <Counter initial={1} stock={5} onAdd={handleOnAdd}/>
        </div>
    )
}
export default ItemListContainer