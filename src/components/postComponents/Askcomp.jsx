import React from 'react'

export default function Askcomp() {

  function showAskBox() {
    document.querySelector(".askbox").classList.remove("hidden")
    document.querySelector(".askbox").classList.add("flex")
    
}

  return (
    <div className='border rounded-sm shadow-sm hover:border-gray-300'>
      <div className='bg-[#fcfcfc] w-[100%] py-2 px-2 flex flex-col gap-3 justify-center items-center'>
        <div className='flex w-[100%] gap-3'>
          <img className='w-8 h-8 rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" />
          <input onClick={showAskBox} type="text" className='cursor-pointer bg-[#F7F7F8] font-semibold w-[100%] rounded-3xl px-2 text-[14px] border border-gray-300' placeholder='What do you want to ask or share?' />
        </div>

        <div className='w-[80%] flex items-center justify-around'>
          <div className='border-r w-[33%] px-1'>
            <div className='flex justify-center items-center text-[#636466] font-semibold text-[13px] gap-1 rounded-full hover:bg-gray-100 py-0.5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
              Ask
            </div>
          </div>

          <div className='border-r w-[33%] px-1'>
            <div className='flex justify-center items-center text-[#636466] font-semibold text-[13px] gap-1 rounded-full hover:bg-gray-100 py-0.5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              Answer
            </div>
          </div>

          <div className='w-[33%] px-1'>
            <div className='flex justify-center items-center text-[#636466] font-semibold text-[13px] gap-1 rounded-full hover:bg-gray-100 py-0.5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              Post
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
