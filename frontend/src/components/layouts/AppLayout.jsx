import React from 'react'
import Header from '../common/Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='w-[95%] mx-auto pb-10'>
    <Header/>
    <Outlet/>
    </div>
  )
}

export default AppLayout