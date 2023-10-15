import React from 'react'
import post1 from "./postPhoto/post1.jpg"
import post2 from "./postPhoto/post2.jpg"


export default function PostsComp() {
    return (
        <>
            {/* Post 1 */}
            <div className='border bg-[#fcfcfc] rounded-sm shadow-sm hover:border-gray-300 mt-2 pt-1'>
                <div className='flex gap-2 px-2'>
                    <div>
                        <img className='w-8 h-8 rounded-lg' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className="about P-2 flex flex-col items-start justify-center gapx-1 h-9">
                        <div className='font-semibold text-[11px] flex gap-1 justify-center items-center '> <div className='hover:border-b border-black'>Shivani</div> <div className='text-blue-500 flex items-center justify-center gap-1'><div className='bg-blue-400 w-0.5 h-0.5 rounded-full'></div><div className='hover:border-b border-blue-500'>Follow</div> </div></div>
                        <div className='flex justify-center items-center gap-1 text-gray-500 text-[11px]'>Answered by Bhanu <div className='bg-gray-500 w-0.5 h-0.5 rounded-full'></div> <div>Jun 14</div></div>
                    </div>
                </div>
                <div>
                    <div className="quetion font-bold p-2">What Do You Guys Think?</div>
                    <div className="postPhoto flex items-center justify-center w-auto h-auto p-0 m-0">
                        <img className='object-cover' src={post1} alt="" />
                    </div>
                </div>
                <div className='h-8 flex items-center m-1 sm:ml-5 ml-0'>
                    <div className='hover:cursor-pointer flex justify-center items-center gap-1 text-gray-500 text-[13px] border border-gray-400 w-30 p-1 rounded-3xl px-3 bg-[#EFEFEF]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg> <div className='font-semibold'>Upvote</div> <div className='bg-gray-500 w-0.5 h-0.5 rounded-full'></div> <div className='border-r border-gray-400 pr-2 text-[12px]'>22K</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="hover:cursor-pointer comment ml-3 flex gap-1 items-center justify-center">
                        <div className='flex gap-1 items-center justify-center hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="gray" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                            </svg>
                            <div className='text-[12px]'>108</div>
                        </div>
                        <div className='ml-3 flex gap-1 items-center justify-center hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="Gray" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                            </svg>
                            <div className='text-[12px]'>108</div>
                        </div>
                    </div>
                </div>
            </div>

         {/* Post 2 */}
         <div className='border bg-[#fcfcfc] rounded-sm shadow-sm hover:border-gray-300 mt-2 pt-1'>
                <div className='flex gap-2 px-2'>
                    <div>
                        <img className='w-8 h-8 rounded-lg' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" />
                    </div>
                    <div className="about P-2 flex flex-col items-start justify-center gapx-1 h-9">
                        <div className='font-semibold text-[11px] flex gap-1 justify-center items-center '> <div className='hover:border-b border-black'>Bhanu</div> <div className='text-blue-500 flex items-center justify-center gap-1'><div className='bg-blue-400 w-0.5 h-0.5 rounded-full'></div><div className='hover:border-b border-blue-500'>Follow</div> </div></div>
                        <div className='flex justify-center items-center gap-1 text-gray-500 text-[11px]'>Answered by Bhanu <div className='bg-gray-500 w-0.5 h-0.5 rounded-full'></div> <div>Jun 14</div></div>
                    </div>
                </div>
                <div>
                    <div className="quetion font-bold p-2">You need to be clear about what you want</div>
                    <div className="postPhoto">
                        <img className='action object-cover' src={post2} alt="" />
                    </div>
                </div>
                <div className='h-8 flex items-center m-1 sm:ml-5 ml-0'>
                    <div className='hover:cursor-pointer flex justify-center items-center gap-1 text-gray-500 text-[13px] border border-gray-400 w-30 p-1 rounded-3xl px-3 bg-[#EFEFEF]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg> <div className='font-semibold'>Upvote</div> <div className='bg-gray-500 w-0.5 h-0.5 rounded-full'></div> <div className='border-r border-gray-400 pr-2 text-[12px]'>22K</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="hover:cursor-pointer comment ml-3 flex gap-1 items-center justify-center">
                        <div className='flex gap-1 items-center justify-center hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="gray" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                            </svg>
                            <div className='text-[12px]'>108</div>
                        </div>
                        <div className='ml-3 flex gap-1 items-center justify-center hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="Gray" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                            </svg>
                            <div className='text-[12px]'>108</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>

    )
}
