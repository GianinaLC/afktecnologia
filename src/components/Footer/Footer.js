import './Footer.css'
import { BsFillGeoAltFill, BsFillCreditCard2BackFill, BsWhatsapp } from "react-icons/bs"

const Footer = () =>{
    const imgFooter = '../../images/afklogo1.png'

    return(
        <footer className='bgFooter'>
            <div className='iconContainer'>
                <div className='divInfo'>
                    < BsFillGeoAltFill className='iconFooter' />
                    <p> Entregas a domicilio Gran Mendoza </p>
                </div>
                
                <div className='divInfo'>
                    < BsFillCreditCard2BackFill className='iconFooter' />   
                    <p> Mercado Pago / Efectivo </p>
                    <p> Envíos a todo el país, gratis desde $6000 </p> 
                </div>
                        
                <div className='divInfo'>
                    < BsWhatsapp className='iconFooter' />
                    <p> 2613334455 </p>
                    <p> Lun a Sab 8 a 20hs </p>
                </div>
            </div>
            <div>
                <img src={imgFooter} className='imgFoo'/>
            </div>
        </footer>
    )
} 

export default Footer