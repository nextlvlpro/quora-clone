import React from 'react'

export default function NotificationBar() {
  return (
    <div className='ml-5 bg-[#fcfcfc] rounded-sm shadow-sm py-3 sm:flex flex-col gap-2 hidden'>
      <div className='border-b border-gray-300'>
        <div className="ml-4 p-2 font-bold"> Spaces To follow</div>
      </div>

      <div className='border-b border-gray-300'>
        <div className='px-2 py-1 flex items-center'>
          <div className='flex gap-1'>
            <div className='h-7 w-6 flex'>
              <img className='object-cover rounded-md' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className='flex flex-col w-[90%]'>
              <h3 className='text-gray-800 font-semibold text-[13px]'>Thee Programmer's Cafe</h3>
              <p className='text-gray-400 text-[12px]'>The NASA to share Programming code that was used in rocket which took astronauts to moon...</p>
            </div>
          </div>
        </div>
      </div>

      <div className='border-b border-gray-300'>
        <div className='px-2 py-1 flex items-center'>
          <div className='flex gap-1'>
            <div className='h-7 w-6 flex'>
              <img className='object-cover rounded-md' src="https://images.unsplash.com/photo-1545312986-594f58761a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbnRhJTIwYW5kJTIwYmFudGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className='flex flex-col w-[90%]'>
              <h3 className='text-gray-800 font-semibold text-[13px]'>Sanat & Banta</h3>
              <p className='text-gray-400 text-[12px]'>One Day Snata asked Banta that what did ant told eliphent in his ear that the...</p>
            </div>
          </div>
        </div>
      </div>

     

    </div>
  )
}
