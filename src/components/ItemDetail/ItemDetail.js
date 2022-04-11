import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'/* 
import Container from 'react-bootstrap/esm/Container' */

const ItemDetail = ({name, img, price, stock, description}) => {
    
    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`)
    } 
    return(
        <div className="cardDetail">
            <div className='cardDetailText'>
                <div>
                    <img src={img} alt={name} className="cardImgDetail"/>
                </div>
                <div className='cardCount'>
                    <h3 className="titleDetailProd">{name}</h3>
                    <div>
                        <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>
                    </div>
                    <p className="price">
                        ${price} <span style={{color:'grey', fontSize:'16px'}}>Stock: {stock}</span>
                    </p>
                </div>
            </div>
            <div className='cardDetailDescription'>
                <h3 className="titleDetailProd">Descripción</h3>
                <p>{description}</p>
            </div>
            
        </div>
    )

}

export default ItemDetail