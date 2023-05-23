import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext'

const Register = () => {

    const { register, formState:{errors}, handleSubmit} = useForm();
    const navigate = useNavigate()
    const { user, setUser } = useUserContext()
    //Aquí guardamos los datos para el useContext y podremos cambiar su estado
    const dataCompilation = (data) =>{
        console.log(data)
        setUser(true)
        navigate("/profile")
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
            
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' {...register('email', {
                    required:true,  
                    pattern: /^\S+@\S+$/i
                })} />
                {errors.name?.type === 'pattern' && <p>This is not an email</p>}
                {errors.name?.type === 'required' && <p>Este campo es requerido</p>} 
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' {...register('password', {
                    required:true
                })} />
                {errors.name?.type === 'required' && <p>Este campo es requerido</p>}
            </div>
            <input type='submit' value='enviar' />
        </form>
    </div>

  )
}

export default Register