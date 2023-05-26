import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Favorites = ({ id, nombre, fotopersonaje, role, fotorol, fondo, favoritesChange }) => {

    const email = JSON.parse(localStorage.getItem("logedUser"))["email"]

    //Con esta función elimnamos el personaje de la lista favoritos
    const deletefav = () => {
        const favorites = JSON.parse(localStorage.getItem(`${email}_favorites`)) || [];
        const filteredFavorites = favorites.filter((fav) => fav.id !== id);
        localStorage.setItem(`${email}_favorites`, JSON.stringify(filteredFavorites));

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
          <div className='role'>
            <img src={fotorol} alt={role} />
            <h1>{role}</h1>
          </div>
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