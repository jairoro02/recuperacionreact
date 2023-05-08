import React, {useEffect, useState} from 'react'
import { useApi } from '../helper/useApi'
import { useParams } from 'react-router-dom';
import Skin from '../components/Skin';
import Loader from '../components/Loader';

const Skins = () => {
  const { uuid } = useParams();
  
  const [skins, setSkins] = useState([]);

  const url = `https://valorant-api.com/v1/weapons/${uuid}` 

  useEffect(()=>{
    useApi(url).then(response=>{
      setSkins(response)
    })
  },[])

  if(skins.length!=0){
    return <Skin object={skins} />
  }else{
    return <Loader />
  }
};

export default Skins;