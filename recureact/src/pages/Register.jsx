import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext'

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [registeredUsers, setRegisteredUsers] = useState([]);

    useEffect(() => {
        const storedUsers = localStorage.getItem('registeredUsers');
        if (storedUsers) {
            setRegisteredUsers(JSON.parse(storedUsers));
        }
    }, []);

    const navigate = useNavigate();
    const { setUser } = useUserContext();

    const dataCompilation = (data) => {
        const updatedUsers = [...registeredUsers, data];
        setRegisteredUsers(updatedUsers)
        localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
        console.log(JSON.parse(localStorage.getItem('registeredUsers')));

        setUser(true)

        navigate("/profile")
    };
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
                    pattern: {
                        value: /^\S+@\S+$/i,
                        ///^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
                        message: "Esto no es un tipo de email"
                    }
                })} />
                {errors.email?.type === 'pattern' && <p>Esto no es un tipo de email válido</p>}
                {errors.email?.type === 'required' && <p>Este campo es requerido</p>}

            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' {...register('password', {
                    required:true
                })} />
                {errors.password?.type === 'required' && <p>Este campo es requerido</p>}
            </div>
            <input type='submit' value='enviar' />
        </form>
    </div>

  )
}

export default Register