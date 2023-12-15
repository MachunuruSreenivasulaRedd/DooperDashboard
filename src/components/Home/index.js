import React from 'react'
import { Navigate, Redirect,Routes } from 'react-router-dom'
export default function Home() {
  return (
    <Navigate to="/login"/>
  )
}
