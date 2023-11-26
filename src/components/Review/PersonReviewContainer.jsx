import React from 'react'
import PersonReview from './PersonReview'

const PersonReviewContainer = () => {
    return (
        <div>
            <p className='text-[50px] font-bold uppercase'>Reviews</p>
            <div className='flex justify-between py-[20px]'>

                <div className='flex justify-center items-center gap-1'>
                    <p className='text-[30px] '>5.0</p>
                    <div className='text-[10px]'>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>1,289 reviews</p>
                    </div>
                </div>

                <div>
                    <button className='px-4 py-2 bg-sky-500 border-[1px] border-black  rounded-md text-[12px] text-white shadow-customShadow3'>Write a review</button>
                </div>
            </div>
            <hr className='border-1 border-solid border-black' />
            <div className='py-[30px]'>
                <PersonReview />
            </div>
            <hr className='border-1 border-solid border-black' />
            <div className='py-[30px]'>
                <PersonReview />
            </div>
            <hr className='border-1 border-solid border-black' />
            <div className='py-[30px]'>
                <PersonReview />
            </div>
            <hr className='border-1 border-solid border-black' />

        </div>
    )
}

export default PersonReviewContainer
