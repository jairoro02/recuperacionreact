import React from 'react'

const Maps = ({list}) => {
  return (
    <div className='maps'>
        {list.map((map)=>{
            return(
            <div className='map'>
                <img src={map.listViewIcon}/>
                <img src={map.displayIcon}/>
                <div className='info'>
                    <h1>Name: {map.displayName}</h1>
                    <h1>Coordinates: {map.coordinates}</h1>
                </div>
            </div>)
        })}
    </div>
  )
}

export default Maps