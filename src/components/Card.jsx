import Image from 'next/image'
import React from 'react'

const Card = ({ name, desc, rating, tag, image }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-1 shadow-2xl p-4 py-8 rounded-2xl w-[230px]'>
            <div className='w-16 h-16 relative' >
                <Image className='object-cover rounded-[50%]' src={image} alt='user' fill />
            </div>

            <h1 className='font-bold text-lg'>{name}</h1>
            <p className='text-sm text-gray-500'>{desc}</p>

            <div className='flex flex-row items-center gap-1 px-2 bg-gray-300 rounded-xl'>
                <Image src={'/star.png'} height={15} width={15} alt='star' />
                <span className='font-extrabold text-md'>{rating}</span>
            </div>

            <h2 className='text-green-600 text-xs flex items-center gap-1'>
                <Image src={"/accept.png"} height={15} width={15} alt='tick_btn'></Image>
                <p>
                    <b>Verified Talent in </b>
                    {tag}
                </p>
            </h2>
        </div>
    )
}

export default Card