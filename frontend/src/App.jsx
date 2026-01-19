import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import AllLinks from './pages/AllLinks'
import AppLayout from './components/layouts/AppLayout'
import SupportUs from './pages/SupportUs'
import Contact from './pages/Contact'
import ProtectedRoute from './components/common/ProtectedRoute'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
            <AppLayout/>
        </ProtectedRoute>
      }>
          <Route index element={<Home/>}/>
          <Route path="/user/all-links" element={<AllLinks/>} />
          {/* <Route path="/support" element={<SupportUs/>} /> */}
          <Route path="/contact-us" element={<Contact/>} />
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App