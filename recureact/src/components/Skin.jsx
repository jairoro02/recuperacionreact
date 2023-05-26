import React from 'react'

const Skin = ({object}) => {

  return (
    <div className='skins'>
        {object.skins.map((skin)=>{
          return(
            <div className='skin'>
              <img src={skin.displayIcon} />
              <h1>{skin.displayName}</h1>
            </div>  
          );
        })}
    </div>
  )
}

export default Skin