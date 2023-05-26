import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext'

const Register = () => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm({mode:"onChange"});
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const navigate = useNavigate();
    const { setUser } = useUserContext();


    const handleKeyDown = (e) => {
        if (e.keyCode === 32) {
          e.preventDefault();
        }
    };

    useEffect(() => {
        const storedUsers = localStorage.getItem('registeredUsers');
        if (storedUsers) {
            setRegisteredUsers(JSON.parse(storedUsers));
        }
    }, []);

    

    

    const dataCompilation = (data) => {

        //Aquí evitamos que se nos guarde la contraseña repetida en el localStorage

        const { rpassword, ...finalData } = data;
        if(localStorage.getItem("logedUser")){
            localStorage.removeItem("logedUser")
            localStorage.setItem("logedUser", JSON.stringify(finalData))
        }else{
            localStorage.setItem("logedUser", JSON.stringify(finalData))
        }
        const updatedUsers = [...registeredUsers, finalData];
        setRegisteredUsers(updatedUsers)
        localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
        console.log(JSON.parse(localStorage.getItem('registeredUsers')));

        setUser(true)

        navigate("/profile")
    };



  return (
    <div>
        
        <form className='form' onSubmit={handleSubmit(dataCompilation)}>
            <h1 className='title'>Register</h1>
            <label >
                <input
                type="text"
                name="name"
                className='input'
                {...register('name', {
                    required: true,
                    maxLength: 15,
                    minLength: 4,
                    pattern: {
                    value: /^\S+$/,
                    message: 'No se permiten espacios en blanco',
                    },
                })}
                onKeyDown={handleKeyDown}
                />
                {errors.name?.type === 'required' && <span>Este campo es requerido</span>}
                {errors.name?.type === 'maxLength' && <p className='error'>Este nombre es demasiado largo</p>}
                {errors.name?.type === 'minLength' && <p className='error'>El nombre tiene que contener mínimo 4 caracteres</p>}
                <span>Name</span>
            </label>

            <label >
            
                <input
                type="text"
                name="email"
                className='input'
                {...register('email', {
                    required: true,
                    pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Esto no es un tipo de email válido',
                    },
                })}
                onKeyDown={handleKeyDown}
                />
                {errors.email?.type === 'pattern' && <p className='error'>Esto no es un tipo de email válido</p>}
                {errors.email?.type === 'required' && <span>Este campo es requerido</span>}

                <span>Email</span>
            </label>
            


            <label>
                <input
                type="password"
                name="password"
                className='input'
                {...register('password', {
                    required: true,
                })}
                onKeyDown={handleKeyDown}
                />
                {errors.password?.type === 'required' && <span>Este campo es requerido</span>}

                <span>Password</span>
            </label>
            
            <label>
                <input
                type="password"
                name="rpassword"
                className='input'
                {...register('rpassword', {
                    required: true,
                    validate: (value) => value === watch('password') || 'Las contraseñas no coinciden',
                })}
                onKeyDown={handleKeyDown}
                />
                {errors.rpassword?.type === 'required' && <span>Este campo es requerido</span>}
                

                <span className='span'>Repeat Password</span>
            </label>
            {errors.rpassword?.type === 'validate' && <p className='error'>{errors.rpassword.message}</p>}
            
            <input className='submit' type="submit" value="Submit" />
            <p className='signin'>I have an acount. <a href='/login'>Login</a></p>
        </form>
    </div>
    )
}

export default Register