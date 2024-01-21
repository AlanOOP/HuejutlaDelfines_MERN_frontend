import React from 'react'
import { Rating } from "@material-tailwind/react";

const TestiomonialCard = ({ name, img, description, review }) => {
    return (
        <div className='bg-white rounded-md p-5 border mx-2'>
            <div className='flex items-center gap-3 mb-4'>
                <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
                    alt=""
                    className='w-14 h-14 md-w-16 md:h-16 rounded-full object-contain'
                    loading='lazy'
                />
                <div className=''>
                    <p className='text-sm md:text-base mb-1 '>Alan Alexis Hernandez Francisco
                    </p>

                    <div className='flex items-end gap-[2px] text-yellow-500'>
                        <Rating value={5} readonly className='flex' ratedColor="amber" />
                    </div>
                </div>
            </div>

            <h6 className='text-md md:text-base font-medium mb-1 '>Una buena experiencia en el club</h6>

            <span className='text-sm md:text-[15px] text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis libero praesentium molestiae accusantium impedit commodi eligendi ipsa cum sapiente.</span>

        </div>
    )
}

export default TestiomonialCard