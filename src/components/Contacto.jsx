import { useForm } from "react-hook-form"

const Contacto = () => {

const{register,handleSubmit} = useForm();

const enviar = (data) =>{
    console.log(data)
}

  return (
    <div className='container'>
        <h1 className='main-title'>Contacto</h1>
        <form className='formulario' onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder='Ingrese tu nombre'{...register("nombre")}/>

            <input type="email" placeholder="Ingrese tu email"{...register("email")}/>

            <input type="Telefono" placeholder="Ingrese tu telefono"{...register("telefono")}/>
            
            <button className="enviar" type="submit" >Enviar</button>
        </form>

    </div>
  )
}

export default Contacto
