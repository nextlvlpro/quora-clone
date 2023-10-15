import React from 'react'

export default function AddQuetionDiv() {
    return (
        <div className='flex flex-col justify-between'>
            <div>
                <div className='mt-3 px-3 py-2'>
                    <div className='bg-[#EBF0FF] w-[100%] text-[#2E69FF] px-2 py-3 rounded-sm'>
                        <h2 className='font-bold '> Tips on getting good answers quickly </h2>
                        <ul className=' list-disc ml-7'>
                            <li>Make sure your question has not been asked already</li>
                            <li>Keep your question short and to the point</li>
                            <li>Double-check grammar and spelling</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center justify-start gap-2 px-3 py-1 mt-3'>
                    <div className='w-5 h-5 border border-gray-200 rounded-full cursor-pointer overflow-hidden'>
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                    </svg>

                    <div className='w-[100px] border text-[10px] p-2 rounded-full text-gray-400 hover:bg-gray-200 cursor-pointer font-bold flex items-center justify-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                        Public
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                <div className='h-[250px]'>
                    <textarea name="quetxt" id="thequetxt" rows={15} placeholder='Start Your Quetion With "What", "How", "Why" etc.' className='h-10 w-full outline-none border-b border-gray-200 p-2 text-[18px]'></textarea>
                </div>
            </div>
            <div className='border-t border-gray-100 w-full flex items-center justify-end gap-1 py-2 -mb-1'>
                <div className=' cursor-pointer hover:bg-100'>
                    Cancle
                </div>
                <div className='p-2 border rounded-3xl bg-[#1A5AFF] text-white font-semibold w-[150px] text-center cursor-pointer'>
                    Add Quetion
                </div>

            </div>


        </div>
    )
}
