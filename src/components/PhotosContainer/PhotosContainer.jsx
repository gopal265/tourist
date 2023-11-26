import React from 'react'
import image1 from "../../assets/place/image1.jpg"
import image2 from "../../assets/place/image2.jpg"
import image3 from "../../assets/place/image6.jpg"
import image4 from "../../assets/place/image4.jpg"
import image5 from "../../assets/place/image5.jpg"

const PhotosContainer = () => {
    return (
        <div className='pb-[25px]'>

            <div className='grid md:grid-cols-10 gap-3'>

                <div className='md:col-span-6 relative'>
                    <img src={image1} className='w-full rounded-lg' />
                    <div className='absolute bottom-[20px] left-[20px] uppercase font-bold text-[25px] text-white '>place</div>
                    <div className='absolute top-[20px] right-[20px] bg-yellow-500 rounded-full font-bold text-[12px]  px-3  py-1'>Popular</div>
                </div>

                <div className='md:col-span-4 grid grid-cols-2 gap-3'>

                    <div className='w-full h-full'>
                        <img src={image2} className='w-full h-full rounded-lg' />
                    </div>

                    <div>
                        <img src={image3} className='w-full h-full rounded-lg' />
                    </div>

                    <div>
                        <img src={image4} className='w-full h-full rounded-lg' />
                    </div>

                    <div>
                        <img src={image5} className='w-full h-full rounded-lg' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PhotosContainer
