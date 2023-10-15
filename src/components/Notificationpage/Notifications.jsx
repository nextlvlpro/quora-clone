import React from 'react'
import Filter from './filter'
import Noti from "./noti.jsx"
export default function Notifications() {
  return (
    <div className='overflow-y-scroll h-[100vh]'>
        <div className='mt-[60px] sm:max-w-[67%] w-[100%] flex justify-start m-auto pb-10 gap-2'>
      <Filter />
      <Noti />
    </div>
    </div>
    
    
  )
}
