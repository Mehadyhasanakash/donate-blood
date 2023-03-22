import React, { useContext } from 'react'
import { AuthContex } from '../components/Contex/UserContex'

const Blog = () => {

  const {user} = useContext(AuthContex)
  return (
    <div>Blog

      <p>{user?.email}</p>
    </div>
  )
}

export default Blog