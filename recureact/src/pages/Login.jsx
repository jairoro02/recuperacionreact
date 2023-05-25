import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext'

const Login = () => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    const navigate = useNavigate();
    const { setUser } = useUserContext();


    const handleKeyDown = (e) => {
        if (e.keyCode === 32) {
          e.preventDefault();
        }
    };

    const dataCompilation = (data) => {

        //Aquí evitamos que se nos guarde la contraseña repetida en el localStorage
        const userRegistered = JSON.parse(localStorage.getItem("registeredUsers"))
        if(!!userRegistered){ 
            userRegistered.map((user)=>{
                console.log(user)
                console.log(data)
                if(user.name === data.name && user.email===data.email && user.password === data.password){
                    localStorage.setItem("logedUser", JSON.stringify(data))
                    setUser(true)
                    navigate("/profile")
                }else{
                    window.alert("Este usuario no está registrado")
                }
            })
            
        }else{
            window.alert("No hay usuarios registrados en la web")
        }

        
    };

    return (
        <div>
            
            <form className='form' onSubmit={handleSubmit(dataCompilation)}>
                <h1 className='title'>Login</h1>
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
                <input className='submit' type="submit" value="Submit" />
            </form>
        </div>
        )
    }


export default Login