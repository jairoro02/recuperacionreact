import React from 'react';
import { Link } from 'react-router-dom';

const Weapon = ({ list }) => {

  return (
    <div className='weapons'>
      {list.map((weapon) => {
        if (weapon.shopData === null) {
          return (
            <Link key={weapon.uuid} to={`/skins/${weapon.uuid}`}>
              <div className='weapon'>
                <img src={weapon.displayIcon} />
                <div className='info'>
                  <h1>Category: Mele</h1>
                  <h1>Name: {weapon.displayName}</h1>
                </div>
              </div>
            </Link>
          );
        } else {
          return (
            <Link key={weapon.uuid} to={`/skins/${weapon.uuid}`}>
              <div className='weapon'>
                <img src={weapon.displayIcon} />
                <div className='info'>
                  <h1>Category: {weapon.shopData.category}</h1>
                  <h1>Name: {weapon.displayName}</h1>
                  <h1>Price: {weapon.shopData.cost}</h1>
                  <h1>Firerate: {weapon.weaponStats.fireRate}</h1>
                  <h1>Bullets: {weapon.weaponStats.magazineSize}</h1>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Weapon;