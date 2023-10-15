import React from 'react'

export default function Noti() {
    return (
        <div className='sm:w-[55%] flex flex-col w-[100%] mt-[100px] sm:mt-0'>
            <div className='p-2 border-b border-gray-300 flex sm:gap-[60%] gap-[20%] items-center'>
                <div className='font-semibold text-[16px] '>
                    Notifications
                </div>
                <div className='text-[10px] text-gray-600  cursor-pointer border-collapse flex items-center justify-center'>
                    <div className='hover:border-b'>
                        Mark All As Read
                    </div>
                    <div className='bg-gray-500 w-0.5 h-0.5 rounded-full mx-1'></div>
                    <div className='hover:border-b'>
                        Settings
                    </div>

                </div>
            </div>

            <div className='p-2 hover:cursor-pointer '>

                <div className='flex gap-3 border-b border-gray-200 py-4'>
                    <div className='border h-8 w-8 rounded-md overflow-hidden'>
                        <img className=' object-cover' src="https://images.unsplash.com/photo-1696621690997-14ebd5519c22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-center text-[14px] text-gray-600  cursor-pointer'>
                            <div className=''>
                                Bhanu's Universe
                            </div>
                            <div className='bg-gray-500 w-0.5 h-0.5 rounded-full mx-1'></div>
                            <div>
                                Answered in a Space you might like
                            </div>
                            <div className='bg-gray-500 w-0.5 h-0.5 rounded-full mx-1'></div>
                            <div>
                                12h ago
                            </div>
                        </div>
                        <div>
                            <div className='font-bold'>
                                What Did you read today that made you sad?
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-3 border-b border-gray-200 py-4'>
                    <div className='border h-8 w-8 rounded-md overflow-hidden'>
                        <img className=' object-cover' src="https://images.unsplash.com/photo-1696421924553-925caaf2c57e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-center text-[14px] text-gray-600  cursor-pointer'>
                            <div className=''>
                                Shivani in quetions
                            </div>
                            <div className='bg-gray-500 w-0.5 h-0.5 rounded-full mx-1'></div>
                            <div>
                                Answered by Bhanu
                            </div>
                            <div className='bg-gray-500 w-0.5 h-0.5 rounded-full mx-1'></div>
                            <div>
                                15h ago
                            </div>
                        </div>
                        <div>
                            <div className='font-bold'>
                                What is your In hand Salary?
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex gap-3 border-b border-gray-200 py-4'>
                    <div className='border h-8 w-8 rounded-md overflow-hidden'>
                        <img className=' object-cover' src="https://images.unsplash.com/photo-1695605302524-e6dd509cb170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-center text-[14px] text-gray-600  cursor-pointer'>
                            <div className=''>
                                Urwashi in quetions
                            </div>
                            <div className='bg-gray-500 w-0.5 h-0.5 rounded-full mx-1'></div>
                            <div>
                                Answered by Shivani
                            </div>
                            <div className='bg-gray-500 w-0.5 h-0.5 rounded-full mx-1'></div>
                            <div>
                                20h ago
                            </div>
                        </div>
                        <div>
                            <div className='font-bold'>
                                What is your favourite Food?
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}
