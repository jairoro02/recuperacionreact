import React, {useEffect, useState} from 'react'
import { useApi } from '../helper/useApi'
import Weapon from '../components/Weapon';

const Weapons = () => {

  const [weapons, setWeapons] = useState([]);

    const url = 'https://valorant-api.com/v1/weapons'
    
    useEffect(()=>{
      useApi(url).then(response=>{
        setWeapons(response)
      })
    },[])
    if(weapons.length!=0){
      return <Weapon list={weapons} />
    }
      
}

export default Weapons