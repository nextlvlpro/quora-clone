import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className='fixed top-0 left-0 w-full bg-white'>
                <div className='flex flex-col items-center border sticky p-1'>
                    <Navbar />
                </div>
            </div>
    <Outlet />
    </>
  )
}
