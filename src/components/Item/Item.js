import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
    return (
        <div className="cardIndividual">
            <div>
                <picture>
                    <img src={img} alt={name} className="cardImg" />
                </picture>
            </div>
            <div className='cardText'>
                <h3 className="titleProd"> {name} {id} </h3>
                <p className="price"> $ {price} </p>
                <div className='detailButton'>
                    <Link to={`/item/${id}`}> Ver detalle </Link>
                </div> 
            </div>
        </div>
    )
}
export default Item