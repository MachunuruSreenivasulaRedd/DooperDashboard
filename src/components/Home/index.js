import React from 'react'
<<<<<<< HEAD
import {Redirect} from 'react-router-dom'

const Home =() => {
    return <Redirect to="/login" />
}

export default Home
=======
import { Navigate, Redirect,Routes } from 'react-router-dom'
export default function Home() {
  return (
    <Navigate to="/login"/>
  )
}
>>>>>>> a965cdee5b7dfb6e409c55cd0a57665b520339d9
