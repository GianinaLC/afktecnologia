import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
    return (
        <div className="cardSize">
            {products.map(e => <Item key={e.id}{...e}/>)}
        </div>
    )
}
export default ItemList