import { useForm } from "react-hook-form";
import { useState } from "react";

const FormHook = () => {

    const [input, setInput] = useState({nombre: '', direccion: '', correo: '', telefono: ''})
    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
      } 

        {/* <input 
            onChange={handleChange} // assign onChange event 
            name={name} // assign name prop
            />
            // same as above
            <input {...register('firstName')} /> */}


    /* const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
      } */

    const onSubmit = (data, e) => {
        console.log(data)
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({...values, [name]: value}))
    /* e.target.reset() */
    }


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="divForm">
                <h3>Por favor ingrese sus datos</h3>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" {...register("nombre", { required: true , message: 'Nombre obligatorio'})}
                defaultValue={input.nombre} />
                {errors.nombre?.type === 'required' && "Ingrese Nombre"}

                <label htmlFor="direccion">Dirección</label>
                <input id="direccion" {...register("direccion", { required: true })}
                defaultValue={input.direccion} />
                {errors.direccion?.type === 'required' && "Ingrese una dirección"}

                <label htmlFor="telefono">Teléfono</label>
                <input id="telefono" {...register("telefono", { required: true, pattern: (/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/) })}
                defaultValue={input.telefono} />
                {errors.telefono?.type === 'required' && "Ingrese un teléfono"}
                {errors.telefono?.type === 'pattern' && "Ingrese solo números"}

                <label htmlFor="correo">Correo</label>
                <input id="correo" {...register("correo", { required: true, pattern: (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) })} 
                defaultValue={input.correo}/>
                {errors.correo?.type === 'required' && "Se requiere un correo" }
                {errors.correo?.type ===  "pattern" && <span>Ingrese un correo válido</span> }

                <label htmlFor="correoConfirm">Confirme correo</label>
                <input id="correoConfirm" {...register("correoConfirm", { required: true, pattern: (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) })} 
                defaultValue={input.correoConfirm}/>
                {errors.correoConfirm?.type === 'pattern' && "Su correo no es valido" }
            </div>

            <button>Enviar</button>

            {/* <input 
            name= 'nombre'
            onChange={handleChange}
            value={input.nombre}
            ref={
                register({
                    required: {value:true, message: 'Nombre obligatorio'}
                })
            }
            /> */}
            {/* <input {...register('nombre', { required: true, message: 'Nombre obligatorio' })} />

            <span>
                {errors.nombre && errors.nombre.message}
            </span> */}
{/* 
            <input 
            name= 'direccion'
            onChange={handleChange}
            value={input.direccion}
            ref={
                register({
                    required: {value:true, message: 'Dirección obligatoria'}
                })
            }
            />

            <span>
                {errors.direccion && errors.direccion.message}
            </span>

            <input 
            name= 'telefono'
            onChange={handleChange}
            value={input.telefono}
            type="number"
            ref={
                register({
                    required: {value:true, message: 'Teléfono obligatorio'}
                })
            }
            />

            <span>
                {errors.telefono && errors.telefono.message}
            </span>

            <input 
            name= 'correo'
            onChange={handleChange}
            value={input.correo}
            ref={
                register({
                    required: {
                        value:true, 
                        message: 'Correo obligatorio',
                        pattern: (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/),}
                })
            }
            />

            <span>
                {errors.correo && errors.correo.message}
            </span>
             */}
            
        </form>
    )
}

export default FormHook