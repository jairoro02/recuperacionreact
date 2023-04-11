import React from 'react'

const Weapon = ({list}) => {

  return (
    <div className='weapons'>
      {list.map((weapon)=>{
         if(weapon.shopData === null){
          console.log(weapon)
          return (
            <div key={weapon.uuid} className='weapon'>
                <img src={weapon.displayIcon} />
                <div className='info'>
                    <h1>Category: Mele</h1>
                    <h1>Name: {weapon.displayName}</h1>
                </div>
            </div>
          )
         }
         else{
          return (
            <div key={weapon.uuid} className='weapon'>
                <img src={weapon.displayIcon} />
                <div className='info'>
                    <h1>Category: {weapon.shopData.category}</h1>
                    <h1>Name: {weapon.displayName}</h1>
                    <h1>Price: {weapon.shopData.cost}</h1>
                    <h1>Firerate: {weapon.weaponStats.fireRate}</h1>
                    <h1>Bullets: {weapon.weaponStats.magazineSize}</h1>
                </div>
            </div>
          )
         }
         
      })}
    </div>
  )
}

export default Weapon