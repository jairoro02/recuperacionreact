import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../context/UserContext';

const Character = ({ id, nombre, fotopersonaje, role, fotorol, fondo }) => {
  const { user } = useUserContext();
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const email = JSON.parse(localStorage.getItem("logedUser"))["email"]

  useEffect(() => {
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

    //Guardamos el nuevo favorito en la lista
    const existingFavorites = JSON.parse(localStorage.getItem(`${email}_favorites`)) || [];
    const updatedFavorites = [...existingFavorites, favoriteCharacter];
    localStorage.setItem(`${email}_favorites`, JSON.stringify(updatedFavorites));

    setFavorites(updatedFavorites);
    setIsFavorite(true);
  };

  const deletefav = () => {
    //Eliminamos el objeto de la lista por el filtro y actualizamos los favoritos
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
          <h1>Role: {role}</h1>
          <img src={fotorol} alt={role} />
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