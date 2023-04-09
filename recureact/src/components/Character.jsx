import React from 'react'

const Character = ({id,nombre,fotopersonaje,role,fotorol,fondo}) => {



  return (
    <li key={id} className='character' >
        <div className='img' style={{ backgroundImage: `url(${fondo})` }}><img src={fotopersonaje} /></div>
        <div className='infopersonaje'>
            <div className='texto'>
               <h1>Name: {nombre}</h1>
                <h1>Role: {role}</h1>
                <img src={fotorol}/> 
            </div>
            
        </div>
    </li>
  )
}

export default Character