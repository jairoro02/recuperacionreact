import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext'

const Profile = () => {

    const navigate = useNavigate()
    const { user, setUser } = useUserContext()

    
    useEffect(()=>{
        if(!user){
        navigate("/register")
        }
    },[])
  return (
    <div>Profile</div>
  )
}

export default Profile