import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

const authContext = createContext()

const AuthContext = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setIsLoading] = useState(true)

  useEffect(()=>{
    const getUser = async ()=>{
      try {
       const res = await axios.get(
         "http://localhost:6392/api/v1/users/auth/get-user",
         {withCredentials: true}
       );
        console.log("get user",res)
        setUser(res.data.data)
      } catch (error) {
        console.log(error)
      } finally{
        setIsLoading(false)
      }
    }
    getUser()
  },[])

  const login = (user) =>{
    setUser(user)
  }
  const logout = () =>{
    setUser(null)
  }
  return (
    <authContext.Provider value={{user, login, logout}}>
      { children }
    </authContext.Provider>
  )
}

export const useAuth = ()=>{
  return useContext(authContext)
}

export default AuthContext