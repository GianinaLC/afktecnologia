const Notification = ({ cartEmpty = 'empty'}) => {

    return (
        <div className={`${cartEmpty === 'empty' ? 'ocult' : 'cartStyle'}`} >
           
        </div>
        
    )
}

export default Notification