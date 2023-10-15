import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import AddQuetionDiv from './AddQuetion/AddQuetionDiv'
import CreatePostDiv from './AddQuetion/CreatePostDiv'

export default function Navbar() {
    const [createPost, setCreatePost] = useState(false)
    function showAskBox() {
        document.querySelector(".askbox").classList.remove("hidden")
        document.querySelector(".askbox").classList.add("flex")

    }

    function hideAskBox() {
        document.querySelector(".askbox").classList.add("hidden")
        document.querySelector(".askbox").classList.remove("flex")
    }

    function addCss() {
        document.querySelector('.newQue').classList.add('border-[#2E69FF]')
        document.querySelector('.newQue2').classList.remove('border-[#2E69FF]')
        setCreatePost(false)
    }

    function addCss2() {
        document.querySelector('.newQue').classList.remove('border-[#2E69FF]')
        document.querySelector('.newQue2').classList.add('border-[#2E69FF]')
        setCreatePost(true)
    }

    return (


        <div className='flex items-center sm:gap-x-14 justify-center sm:w-[80%] p-0 -m-1 sm:flex-row flex-col pt-1'>

            <div className="logoAndIcon flex items-center cursor-pointer sm:flex-row flex-col">
                <div>
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="logo h-6 mr-5" />
                    </Link>
                </div>


                <div className='flex items-center justify-center'>
                    {/* Home Icon */}
                    <Link to={"/"} className='p-2 m-0 hover:bg-slate-100 rounded-sm overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>

                    <div className='p-2 m-0 hover:bg-slate-100 rounded-sm overflow-hidden'>
                        {/* following icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                        </svg>
                    </div>

                    <div className='p-2 m-0 hover:bg-slate-100 rounded-sm overflow-hidden'>
                        {/* edit icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </div>

                    <div className='p-2 m-0 hover:bg-slate-100 rounded-sm overflow-hidden'>
                        {/* Spaces icon*/}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                    </div>

                    {/* Bell icon*/}
                    <Link to={"/notification"} className='p-2 m-0 hover:bg-slate-100 rounded-sm overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </Link>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search Quora' className='p-2 border border-gray-20 rounded-sm hover:border-cyan-700 h-8 w-[300px] sm:ml-5 text-sm outline-none focus:border-black' />
                </div>
            </div>
            <div className="userAndQuetion flex items-center gap-2">
                <div className='w-15 border text-[10px] p-2 rounded-full text-gray-400 hover:bg-gray-50 cursor-pointer font-bold'> Try Quora+</div>
                <div className='w-6 h-6 border border-gray-200 rounded-full cursor-pointer overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" />
                </div>

                <div className='p-2 m-0 hover:bg-slate-100 overflow-hidden rounded-full cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="gray" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                </div>

                <div onClick={showAskBox} className='flex items-center rounded-xl text-[10px] text-white font-bold bg-[#A82723] p-0 cursor-pointer'> <div className='py-1 px-3'>
                    Ask quetion
                </div>
                    <div className='border-l border-black px-2 m-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                </div>
                <div>
                </div>
            </div>

            {/* The box that apears on clicking add quetion is handled here */}
            <div className='askbox fixed top-0 m-auto h-[100vh] w-[100vw] bg-[#00000032] items-center justify-center hidden'>
                <div className='sm:w-[600px] bg-white opacity-[1] z-50 rounded-xl p-2'>
                    <div className=' flex flex-col'>
                        <div onClick={hideAskBox} className=' hover:cursor-pointer hover:bg-gray-200 w-5 h-5 flex items-center justify-center rounded-md '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className='flex items-center justify-around mt-5 gap-[2px] font-semibold hover:cursor-pointer'>
                            <div onClick={addCss} className='newQue hover:bg-gray-100 border-b-4 rounded-sm  w-[50%] border-[#2E69FF] flex items-center justify-center'>
                                Add Quetion
                            </div >
                            <div onClick={addCss2} className='newQue2 hover:bg-gray-100  border-b-4 rounded-sm w-[50%] flex items-center justify-center'>
                                Create Post
                            </div>
                        </div>
                        {!createPost && (
                            <AddQuetionDiv />
                        )}
                        {createPost && (
                            <CreatePostDiv />
                        )}
                        

                    </div>
                </div>
            </div>
        </div>



    )
}
