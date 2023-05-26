import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext'
import Favorites from '../components/Favorites';

const Profile = () => {

    const navigate = useNavigate();
    const { user, setUser } = useUserContext();
    const email = JSON.parse(localStorage.getItem("logedUser"))["email"]
    const localFavorites = JSON.parse(localStorage.getItem(`${email}_favorites`)) || [];
    const [favorites, setFavorites] = useState(localFavorites);
    const [favoritesUpdated, setFavoritesUpdated] = useState(false);

  
    

    //creamos esta funcion para desloguearnos y redirigimos de nuevo a la página de registro
    const logout = () => {
      setUser(false);
      localStorage.removeItem("logedUser");
      navigate("/register");
    };

    
    
    useEffect(() => {
      const email = JSON.parse(localStorage.getItem("logedUser"))["email"]
      const updatedFavorites = JSON.parse(localStorage.getItem(`${email}_favorites`)) || [];
      setFavorites(updatedFavorites);
      setFavoritesUpdated(false)
    }, [favoritesUpdated]);

    const favoritesChange = () => {
      setFavoritesUpdated(true);
    };


  return (
    <div className='init'>
      <div className='data'>
        <h1>{JSON.parse(localStorage.getItem("logedUser"))["name"]}</h1>
        <h1>{JSON.parse(localStorage.getItem("logedUser"))["email"]}</h1>
        <button onClick={logout}>Cerrar sesión</button>
      </div>
      
      {favorites.length !== 0 ? (
        <ul className="characters">
          {favorites.map((agent) => (
            <Favorites
              key={agent.id}
              id={agent.id}
              nombre={agent.nombre}
              fotopersonaje={agent.fotopersonaje}
              role={agent.role}
              fotorol={agent.fotorol}
              fondo={agent.fondo}
              favoritesChange={favoritesChange}
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