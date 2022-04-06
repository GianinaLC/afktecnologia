import './Item.css'

const Item = ({id, name, img, price, stock}) => {
    return (
        <section className="card">
            <picture >
                <img src={img} alt={name} className="cardImg"/>
            </picture>
            <h3 className="titleProd">{name}{id}</h3>
            <p className="price">$ {price} <span style={{color:'black', fontSize:'16px'}}>Stock: {stock}</span></p>
            <button>Ver detalle</button>
        </section>
    )
}
export default Item