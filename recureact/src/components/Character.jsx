import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../context/UserContext';

const Character = ({ id, nombre, fotopersonaje, role, fotorol, fondo }) => {
  const { user } = useUserContext();
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favorite = existingFavorites.find(item => item.id === id);
    setIsFavorite(!!favorite);
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

    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = [...existingFavorites, favoriteCharacter];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    setFavorites(updatedFavorites);
    setIsFavorite(true);
  };

  const deletefav = () => {
    const updatedFavorites = favorites.filter(item => item.nombre !== nombre);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    setIsFavorite(false);
  };

  return (
    <li key={id} className='character'>
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
    </li>
  );
};

export default Character