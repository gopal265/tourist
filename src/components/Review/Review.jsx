import React from 'react'

const Review = () => {
    return (
        <div className='grid grid-cols-12 border-2 border-black rounded-md shadow-customShadow bg-white pb-[30px]'>
            <div className='sm:col-span-9 col-span-8 pt-[25px] pl-[30px]'>
                <div className='flex gap-2 pb-2'>

                    <div className='text-yellow-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <div className='font-bold text-[14px]'>
                        4.9 stars
                    </div>
                    <div className='text-gray-300 text-[14px] sm:text-[16px]'>
                        (231 Review)
                    </div>

                </div>

                <div className='text-[20px]  sm:text-[35px] font-bold pb-1'>
                    TSUKISHIMA  MONJA STREET
                </div>
                <div className='font-bold text-[12px] sm:text-[14px] pb-4'>
                    Users can easily find the perfect experience to suit their Interests. Userss can easily find the perfect experiences to suit their interests.
                </div>

                <div className='flex flex-col sm:flex-row sm:gap-[100px] gap-3'>

                    <div className='flex font-bold text-[12px] gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                        Texas, United States
                    </div>

                    <div className='flex font-bold text-[12px] gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                        </svg>
                        +216 1234 5655
                    </div>
                </div>
            </div>
            
            <div className='sm:col-span-3 col-span-4'>

                <div className='flex gap-2 pt-3 relative'>
                    <div className='w-[40px] h-[40px] flex justify-center items-center bg-appColor border-[1px] border-black rounded-md shadow-customShadow2 absolute right-[65px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                    </div>
                    <div className='w-[40px] h-[40px] flex justify-center items-center bg-appColor border-[1px] outline-1  border-black rounded-md shadow-customShadow2 absolute right-[15px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>
                    </div>

                </div>
                <div className='pt-[80px] text-[14px] sm:text-[16px] text-end pr-3'>
                    October 4,2021
                </div>
            </div>
        </div>
    )
}

export default Review
