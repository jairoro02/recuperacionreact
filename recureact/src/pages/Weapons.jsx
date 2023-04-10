import React, {useEffect, useState} from 'react'
import { useApi } from '../helper/useApi'
import Weapon from '../components/Weapon';

const Weapons = () => {

  const [weapons, setWeapons] = useState([]);

    const url = 'https://valorant-api.com/v1/weapons'


    useApi(url).then(response=>{
        setWeapons(response)
    })
    useEffect(()=>{
        useApi(url)
    },[])

    weapons.map((weapon)=>{
      console.log('pasaaaaaaaaaaaaaaaa')
      if(weapon.shopData === null){
        return <Weapon uuid={weapon.uuid} name={weapon.displayName} img={weapon.displayIcon} category='Mele' firerate='0' magazine='Without' cost='0' />
      }
      else{
        return <h1>España</h1>
      }
     
    })
  
}

export default Weapons