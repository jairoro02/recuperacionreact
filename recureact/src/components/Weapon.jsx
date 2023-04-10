import React from 'react'

const Weapon = ({uuid, name,img,category,firerate,magazine, cost}) => {
    console.log('gayyyyyy')
  return (
    <div key={uuid} className='weapon'>
        <img src={img} />
        <div className='info'>
            <h1>Category: {category}</h1>
            <h1>Name: {name}</h1>
            <h1>Price: {cost}</h1>
            <h1>Firerate: {firerate}</h1>
            <h1>Bullets: {magazine}</h1>
        </div>
    </div>
  )
}

export default Weapon