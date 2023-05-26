import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../context/UserContext';

const Character = ({ id, nombre, fotopersonaje, role, fotorol, fondo }) => {
  const { user } = useUserContext();
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);


  useEffect(() => {
    if(user){
      var email = JSON.parse(localStorage.getItem("logedUser"))["email"]
    }else{
      var email = "default"
    }
    const existingFavorites = JSON.parse(localStorage.getItem(`${email}_favorites`)) || [];
    // Comprobamos si el favorito existe en la lista de favoritos
    const favorite = existingFavorites.find(item => item.id === id);
    // Con !! convertimos el valor en booleano, si es undefined es falso
    setIsFavorite(!!favorite);
    // Actualizamos el valor de favoritos
    setFavorites(existingFavorites);
  }, [id]);

  const fav = () => {
    const favoriteCharacter = {
      id,
      nombre,
      fotopersonaje,
      role,
      fotorol,
      fondo,
    };
    if(user){
      var email = JSON.parse(localStorage.getItem("logedUser"))["email"]
    }else{
      var email = "default"
    }

    //Guardamos el nuevo favorito en la lista
    const existingFavorites = JSON.parse(localStorage.getItem(`${email}_favorites`)) || [];
    const updatedFavorites = [...existingFavorites, favoriteCharacter];
    localStorage.setItem(`${email}_favorites`, JSON.stringify(updatedFavorites));

    setFavorites(updatedFavorites);
    setIsFavorite(true);
  };

  const deletefav = () => {
    //Eliminamos el objeto de la lista por el filtro y actualizamos los favoritos
    if(user){
      var email = JSON.parse(localStorage.getItem("logedUser"))["email"]
    }else{
      var email = "default"
    }
    const updatedFavorites = favorites.filter(item => item.nombre !== nombre);
    localStorage.setItem(`${email}_favorites`, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    setIsFavorite(false);
  };

  return (
    <div key={id} className='character'>
      <div className='img' style={{ backgroundImage: `url(${fondo})` }}>
        <img src={fotopersonaje} alt={nombre} />
      </div>
      <div className='infopersonaje'>
        <div className='texto'>
          <h1>Name: {nombre}</h1>
          <div className='role'>
            <img src={fotorol} alt={role} />
            <h1>{role}</h1>
          </div>
          
          {user && (
            <FontAwesomeIcon
              className={`heart ${isFavorite ? 'favorite' : ''}`}
              icon={faHeart}
              onClick={!isFavorite ? fav : deletefav}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Character