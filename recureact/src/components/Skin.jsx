import React from 'react'

const Skin = ({object}) => {

  return (
    <div className='maps'>
        {object.skins.map((skin)=>{
          return(
            <div>
              <img src={skin.displayIcon} />
              <h1>{skin.displayName}</h1>
            </div>  
          );
        })}
    </div>
  )
}

export default Skin