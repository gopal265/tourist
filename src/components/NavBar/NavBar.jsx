import React from 'react'

const NavBar = () => {
    return (
        <div className='grid grid-cols-12 bg-black text-white font-semibold text-[14px] px-3 rounded-lg py-2'>
            <div className='col-span-2'>
                Categories
            </div>
            <div className='col-span-2'>
                Activites Near Me
            </div>
            <div className='col-span-2'>
                Add a Place
            </div>
            <div className='col-span-6 '>
                <div className='float-right flex gap-2 items-center'>
                    Start exploring
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>

                </div>
               
            </div>
        </div>
    )
}

export default NavBar
