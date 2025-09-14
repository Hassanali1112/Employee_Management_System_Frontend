import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const authContext = createContext()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setIsLoading] = useState(true)
  // const navigate = useNavigate()

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
  const logout =  async () =>{
    try {
      const res =  await  axios.post(
        "http://localhost:6392/api/v1/users/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(res)
      if(res && res.data.statusCode === 200){
        setUser(null)
        window.location.assign("/login")
        // navigate("/login")
        // <Navigate to={"/login"} />
      }
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <authContext.Provider value={{user, login, logout, loading}}>
      { children }
    </authContext.Provider>
  )
}

export const useAuth = ()=>{
  return useContext(authContext)
}

export default AuthProvider