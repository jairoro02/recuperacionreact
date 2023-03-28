import React, {useEffect, useState} from 'react'
import { useApi } from '../helper/useApi'
import Character from '../components/Character';

const Characters = () => {

    const [agents, setAgents] = useState([]);

    const url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'


    useApi(url).then(response=>{
        setAgents(response)
    })
    useEffect(()=>{
        useApi(url)
    },[])
  return (
    <ul>
         {agents.map((agent)=>(
            <Character id={agent.uuid} nombre={agent.displayName} fotopersonaje={agent.bustPortrait} role={agent.role.displayName} fotorol={agent.role.displayIcon} fondo={agent.background}/>
        ))}

    </ul>
  )
}

export default Characters