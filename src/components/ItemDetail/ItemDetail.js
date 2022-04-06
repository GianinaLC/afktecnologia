import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({name, img, price, stock, description}) => {
    
    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`)
    } 
    return(
        <section className="cardDetail">
            <div className='cardDetailText'>
                <img src={img} alt={name} className="cardImgDetail"/>
                <div>
                    <h3 className="titleProd">{name}</h3>
                    <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>
                    <p className="price">
                        ${price} <span style={{color:'black', fontSize:'16px'}}>Stock: {stock}</span>
                    </p>
                </div>
            </div>
            
            <div>
                <p>{description}</p>
            </div>
        </section>
    )

}

export default ItemDetail