import React, {useEffect, useState} from 'react'
import { useApi } from '../helper/useApi'
import Character from '../components/Character';
import Loader from '../components/Loader';

const Characters = () => {

  const [filteredAgents, setFilteredAgents] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  

  const url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'


  useEffect(() => {
    useApi(url).then((response) => {
      // Aquí se filtran los agentes por role si hay alguno seleccionado
      if (selectedRole) {
        const filtered = response.filter((agent) => agent.role.displayName === selectedRole);
        setFilteredAgents(filtered);
      } else {
        setFilteredAgents(response);
      }
    });
  }, [selectedRole]);

  return (
  <div>
    <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
      <option value="">Todos los roles</option>
      <option value="Sentinel">Sentinel</option>
      <option value="Initiator">Initiator</option>
      <option value="Duelist">Duelist</option>
      <option value="Controller">Controller</option>
    </select>

    {filteredAgents.length !== 0 ? (
      <ul className="characters">
        {filteredAgents.map((agent) => (
          <Character
            key={agent.uuid}
            id={agent.uuid}
            nombre={agent.displayName}
            fotopersonaje={agent.bustPortrait}
            role={agent.role.displayName}
            fotorol={agent.role.displayIcon}
            fondo={agent.background}
          />
        ))}
      </ul>
    ) : (
      <Loader />
    )}
  </div>
  );
};
    


export default Characters