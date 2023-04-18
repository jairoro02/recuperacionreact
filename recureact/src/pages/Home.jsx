
import React, {useEffect, useState} from 'react'
import { useApi } from '../helper/useApi'
import Maps from '../components/Maps'

const Home = () => {

  const [maps,setMaps] = useState([])

  const url = 'https://valorant-api.com/v1/maps'
  useEffect(()=>{
    useApi(url).then(response=>{
      setMaps(response)
    })
  },[])

  return (
    <Maps list={maps} />
  )
}

export default Home