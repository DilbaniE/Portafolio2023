import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppPortafolio } from '../AppPortafolio'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppPortafolio/>} />
            <Route path="login" element={<h1>Login</h1>} />
            
        </Routes>
    </BrowserRouter>
  )
}
