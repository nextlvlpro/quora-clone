import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className='flex w-[100%] items-center justify-center flex-col'>
        <h1 className='text-[150px]'>
        Pgae Not Found
        </h1>
        <Link to={'/'} className='bg-green-600 text-white p-2 text-[50px] rounded-lg'>
            Go Home
        </Link>
        
    </div>
  )
}
