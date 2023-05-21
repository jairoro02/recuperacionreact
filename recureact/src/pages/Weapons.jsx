import React, {useEffect, useState} from 'react'
import { useApi } from '../helper/useApi'
import Weapon from '../components/Weapon';
import Loader from '../components/Loader';

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
    }else{
      return <Loader />
    }
      
}

export default Weapons