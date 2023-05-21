
import React, {useEffect, useState} from 'react'
import { useApi } from '../helper/useApi'
import Maps from '../components/Maps'
import Loader from '../components/Loader'

const Home = () => {

  const [maps,setMaps] = useState([])

  const url = 'https://valorant-api.com/v1/maps'
  useEffect(()=>{
    useApi(url).then(response=>{
      setMaps(response)
    })
  },[])

  if(maps.length!=0){
    return (
      <Maps list={maps} />
    )
  }else{
    return <Loader />
  }
  
}

export default Home