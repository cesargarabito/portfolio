import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
    <motion.img
    initial={{
        x: directionLeft ? -200: 200,
        opacity: 0,
    }}
    transition={{ duration: 1}}
    whileInView={{ opacity: 1, x: 0}}
    src='data:image/png;base64,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'
    className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-12
    xl:h-12 filter group-hover:grayscale transition duration-300 ease-in-out' 
    />
    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
    ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-12 xl:h-12
    rounded-full z-1'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-1xl font-bold text-black opacity-100'>100%</p>

        </div>
        
        </div>
    </div>
  )
}