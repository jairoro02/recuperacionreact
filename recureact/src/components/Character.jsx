import React from 'react'

const Character = ({id,nombre,fotopersonaje,role,fotorol,fondo}) => {



  return (
    <li key={id} className='character' style={{ backgroundImage: `url(${fondo})` }} >
        <img src={fotopersonaje} />
        <div className='infopersonaje'>
            <div className='texto'>
               <h1>nombre:{nombre}</h1>
                <h1>rol:{role}</h1> 
            </div>
            <img src={fotorol}/>
        </div>
    </li>
  )
}

export default Character