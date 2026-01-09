import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App