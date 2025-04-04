import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='relative bg-black w-full rounded-[50px] items-center text-white flex flex-row justify-between p-[15px] '>
            {/* Logo */}
            <h1 className='text-2xl'>
                <b>
                    Jobwhee
                </b>
            </h1>

            {/* mid section */}
            <div>
                <ul className='flex gap-4 flex-row'>
                    <li>Post a job</li>
                    <li>Explore Jobs</li>
                    <li>How it works</li>
                </ul>
            </div>

            {/* RIght section */}
            <div className='flex flex-row text-sm gap-2 items-center'>
                <div className='relative rounded-3xl border-1 border-gray-400 px-1 py-1 flex flex-row gap-1'>
                    <div className='relative w-5 h-5'>
                        <Image alt='english' src={"/english.png"} fill />
                    </div>
                    <p>EN &darr;</p>

                    {/* FLoating section */}
                    <div className='absolute p-2 border-1 border-gray-400 rounded-lg -bottom-20 bg-black z-10 flex flex-col gap-2'>
                        <div className='flex gap-1 items-center'>
                            <div className='relative w-4 h-4'>
                                <Image alt='english' src={"/english.png"} fill />
                            </div>
                            <p>English</p>
                        </div>
                        <div className='w-full h-[0.5px] bg-gray-400'></div>
                        <div className='flex gap-1 items-center'>
                            <div className='relative w-4 h-4'>
                                <Image alt='english' src={"/greek.png"} fill />
                            </div>
                            <p>Greek</p>
                        </div>
                    </div>
                </div>
                <button className='rounded-3xl border-1 border-gray-400 px-6 py-1'>Sign In</button>
                <button className='rounded-3xl border-1 border-gray-400 px-6 py-1 bg-white text-black'>Sign Up</button>
            </div>


        </div>
    )
}

export default Navbar