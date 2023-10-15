import React from 'react'

export default function Filter() {
  return (
    
    <div className="filter hidden sm:flex">
      <div className='pl-2'>
        <div className='font-semibold p-2 border-b border-gray-300 text-[16px]'>
          Filters
        </div>
        <div className='flex flex-col items-start justify-start'>

          <div className='hover:bg-gray-100 cursor-pointer'>
            <div className='font-bold text-[14px] text-red-600 p-2'>
              All Notifications
            </div>
          </div>

          <div className='hover:bg-gray-100 cursor-pointer w-[100%]'>
            <div className='font-semibold text-[14px] text-gray-600 p-2'>
              Stories
            </div>
          </div>

          <div className='hover:bg-gray-100 cursor-pointer w-[100%]'>
            <div className='font-semibold text-[14px] text-gray-600 p-2'>
              Quetions
            </div>
          </div>

          <div className='hover:bg-gray-100 cursor-pointer w-[100%]'>
            <div className='font-semibold text-[14px] text-gray-600 p-2'>
              Spaces
            </div>
          </div>

          <div className='hover:bg-gray-100 cursor-pointer w-[100%]'>
            <div className='font-semibold text-[14px] text-gray-600 p-2'>
              People Update
            </div>
          </div>

          <div className='hover:bg-gray-100 cursor-pointer w-[100%]'>
            <div className='font-semibold text-[14px] text-gray-600 p-2'>
              Upvotes
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
