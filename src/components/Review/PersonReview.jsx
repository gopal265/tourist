import React from 'react'

const PersonReview = () => {
    return (
        <div className='grid grid-cols-4'>
            <div className='uppercase text-[10px] sm:text-[12px] font-bold'>
                <p>Laila John</p>
                <p className='text-gray-300'>Mumbai</p>
            </div>
            <div className='col-span-2'>
                <div className='text-black '>
                    <div className='flex flex-col md:flex-row  gap-2 md:items-center pb-4 '>
                        ⭐⭐⭐⭐⭐
                        <p className='font-bold text-[18px]  sm:text-[20px]'> The best out there!</p>
                    </div>
                    <div className='font-semibold text-[12px] sm:text-[14px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eaque, tempora repellendus commodi sint nihil saepe obcaecati dolore quam quasi magni culpa mollitia consequatur esse provident praesentium ipsum officiis ab!
                    </div>
                </div>
            </div>
            <div className='text-end text-[12px] sm:text-[14px] font-bold'>
                May 12,2021
            </div>
        </div>
    )
}

export default PersonReview
