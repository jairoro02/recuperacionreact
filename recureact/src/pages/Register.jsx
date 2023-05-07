import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {

    const { register, formState:{errors}, handleSubmit} = useForm();

    //Aquí guardamos los datos para el useContext y podremos cambiar su estado
    const dataCompilation = (data) =>{
        console.log(data)
    }
  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(dataCompilation)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='name'{...register('name',{
                    required: true,
                    maxLength: 10
                })}/>
                {errors.name?.type === 'required' && <p>Este campo es requerido</p>} 
                {/* Intentar cambiar el párrafo de error por un pop up de una librería */}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' {...register('email', {
                    required:true
                })} />
            </div>
            <input type='submit' value='enviar' />
        </form>
    </div>

  )
}

export default Register