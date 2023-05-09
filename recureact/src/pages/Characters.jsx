import React, {useEffect, useState} from 'react'
import { useApi } from '../helper/useApi'
import Character from '../components/Character';
import Loader from '../components/Loader';

const Characters = () => {

    const [agents, setAgents] = useState([]);

    const url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'


    
    useEffect(()=>{
      useApi(url).then(response=>{
        setAgents(response)
      })
    },[])
    if(agents.length!=0){
      return (
      <ul className='characters'>
          {agents.map((agent)=>(
              <Character id={agent.uuid} nombre={agent.displayName} fotopersonaje={agent.bustPortrait} role={agent.role.displayName} fotorol={agent.role.displayIcon} fondo={agent.background}/>
          ))}

      </ul>)
    }else{
      return <Loader />
    }
    
 
}

export default Characters