import { createContext, useContext, useState, useEffect } from 'react'

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false)

    useEffect(()=>{
      if(!!JSON.parse(localStorage.getItem("logedUser"))){
        setUser(true)
      }
    },[])
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider

export const useUserContext = () => useContext(UserContext)