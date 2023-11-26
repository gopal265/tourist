import React from 'react'
import Acitivity from './Acitivity'

const ActivityContainer = () => {
  return (
    <div className='w-full'>
      <div className='uppercase text-[30px] sm:text-[40px] font-bold pb-4'>Related Activities</div>
      <div className='grid  grid-col-1 sm:grid-cols-2 custom:grid-cols-3'>
        <div className='flex justify-center items-centerc sm:pr-2 py-2'>
            <Acitivity />
        </div>
        <div className='flex justify-center items-center sm:px-2 py-2'>
            <Acitivity />
        </div>
        <div className='flex justify-center items-center custom:pl-2 py-2'>
            <Acitivity />
        </div>
      </div>
    </div>
  )
}

export default ActivityContainer
