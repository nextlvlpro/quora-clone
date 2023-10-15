import React from 'react'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Spaces from './components/Spaces'
import NotificationBar from './components/NotificationBar'

export default function Home() {

    
    return (
        <>
        <div className='flex bg-[#F1F2F2] justify-center pb-10'>
            <div className='sm:mt-[60px] mt-[180px] flex w-[70%]'>
                <div className='sm:w-[15%] w-0 sm:mr-9'>
                    <Spaces />
                </div>
                <div className='sm:w-[60%] w-[100%] border'>
                    <Posts />
                </div>
                <div className='sm:w-[25%] w-0'>
                    <NotificationBar />
                </div>
            </div>
        </div>
       
        </>
        

    )
}
