import { createContext, useContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(true)
    console.log(user)
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider

export const useUserContext = () => useContext(UserContext)