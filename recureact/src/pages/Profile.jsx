import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext'

const Profile = () => {

    const navigate = useNavigate()
    const { user, setUser } = useUserContext()

    //creamos esta funcion para desloguearnos y redirigimos de nuevo a la página de registro
    const logout = () => {
      setUser(false);
      localStorage.removeItem("logedUser");
      navigate("/register");
    };

    
    useEffect(()=>{
        if(!user){
        navigate("/register")
        }
    },[])
  return (
    <div>
      <h1>{JSON.parse(localStorage.getItem("logedUser"))["name"]}</h1>
      <h1>{JSON.parse(localStorage.getItem("logedUser"))["email"]}</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  )
}

export default Profile