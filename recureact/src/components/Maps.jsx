import React from 'react'

const Maps = ({list}) => {
  return (
    <div className='maps'>
        {list.map((map)=>{
          if(map.displayName != "The Range"){
            return(
            <div key={map.uuid} className='map'>
                <img className='mid' src={map.listViewIcon}/>
                <img className='complete' src={map.displayIcon}/>
                <div className='info'>
                    <h1 className='name'>{map.displayName}</h1>
                    <h2 className='coor'>{map.coordinates}</h2>
                </div>
            </div>)
        }
        })}
    </div>
  )
}

export default Maps