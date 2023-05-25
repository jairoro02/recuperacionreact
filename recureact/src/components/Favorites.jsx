import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Favorites = ({ id, nombre, fotopersonaje, role, fotorol, fondo, favoritesChange }) => {

    //Con esta función elimnamos el personaje de la lista favoritos
    const deletefav = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const filteredFavorites = favorites.filter((fav) => fav.id !== id);
        localStorage.setItem('favorites', JSON.stringify(filteredFavorites));

        //Al ejecutarse esta función mandamos a renderizar de nuevo a la página profile
        favoritesChange();
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
            <FontAwesomeIcon
              className={"heart favorite"}
              icon={faHeart}
              onClick={deletefav}
            />
         
        </div>
      </div>
    </li>
  )
}

export default Favorites