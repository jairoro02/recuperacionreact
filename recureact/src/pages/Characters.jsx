import React, { useEffect, useState } from 'react';
import { useApi } from '../helper/useApi';
import Character from '../components/Character';
import Loader from '../components/Loader';

const Characters = () => {
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [searchName, setSearchName] = useState('');

  const url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true';

  useEffect(() => {
    useApi(url).then((response) => {
      let filtered = response;
      // Filtrado por role si hay alguno seleccionado
      if (selectedRole) {
        filtered = filtered.filter((agent) => agent.role.displayName === selectedRole);
      }

      // Filtrado por las letras del nombre
      if (searchName) {
        const searchTermLower = searchName.toLowerCase();
        filtered = filtered.filter((agent) =>
          agent.displayName.toLowerCase().startsWith(searchTermLower)
        );
      }

      // Si los anteriores if no se ejecutan filtered seguirá siendo = a la respuesta de la api, sin ningún tipo de filtrado
      setFilteredAgents(filtered);
    });
  }, [selectedRole, searchName]);

  return (
    <div>
      <input
        type="text"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="Buscar por nombre..."
      />

      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setFilteredAgents((prevAgents) => {
              let filtered = prevAgents;

              if (searchName) {
                const searchTermLower = searchName.toLowerCase();
                filtered = filtered.filter((agent) =>
                  agent.displayName.toLowerCase().startsWith(searchTermLower)
                );
              }

              return filtered;
            });
          }
        }}
      >
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

export default Characters;
