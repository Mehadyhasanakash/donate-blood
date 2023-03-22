import React, { createContext } from 'react'

export const AuthContex = createContext();

const UserContex = ({children}) => {
    
    const user = {email: "abc"};
    const authInfo = {user};



  return (
    <>
    <AuthContex.Provider value={authInfo}>
        {children}

    </AuthContex.Provider>

    </>
  )
}

export default UserContex;