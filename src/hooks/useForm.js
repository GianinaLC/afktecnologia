import { useForm } from "react-hook-form";

export const useForm = () => {

    const { register, errors, handleSubmit } = useForm()

    const onSubmit = (data, e) => {
        console.log(data)
    /* e.target.reset() */
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Por favor ingrese sus datos</h3>
            <input 
            name= 'nombre'
            onChange={handleChange}
            ref={
                register({
                    required: {value:true, message: 'Nombre obligatorio'}
                })
            }
            />

            <span>
                {errors.nombre && errors.nombre.message}
            </span>

            <input 
            name= 'direccion'
            onChange={handleChange}
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
            
            <button>Enviar</button>
        </form>
    )
}
