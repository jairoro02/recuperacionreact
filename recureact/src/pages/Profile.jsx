import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext'
import Character from '../components/Character';

const Profile = () => {

    const navigate = useNavigate()
    const { user, setUser } = useUserContext()

    //creamos esta funcion para desloguearnos y redirigimos de nuevo a la página de registro
    const logout = () => {
      setUser(false);
      localStorage.removeItem("logedUser");
      navigate("/register");
    };

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
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
      {favorites.length !== 0 ? (
        <ul className="characters">
          {favorites.map((agent) => (
            <Character
              key={agent.id}
              id={agent.id}
              nombre={agent.nombre}
              fotopersonaje={agent.fotopersonaje}
              role={agent.role}
              fotorol={agent.fotorol}
              fondo={agent.fondo}
            />
          ))}
        </ul>
      ) : (
        <p>No tienes favoritos asignados</p>
      )}
    </div>
  )
}

export default Profile