import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='rounded-[50px] w-full relative'>
            <div className='relative w-full h-[650px]'   >
                <Image className='rounded-[50px] object-cover' src={'/hero.jpeg'} alt='hero_image' fill />
            </div>

            {/* TEXT 1 */}
            <div className='backdrop-blur-lg text-white absolute p-8 rounded-4xl top-10 left-10 font-bold text-4xl'
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 80% 100%, 0% 100%)" }}>
                <span>FIND THE</span>
                &nbsp;
                <span className='text-[#CBEC5E]'>TALENT</span>
                &nbsp;
                <span>SIGN UP</span>
                <br />
                <span>& GET THE</span>
                &nbsp;
                <span className='text-[#CBEC5E]'>JOB</span>
                &nbsp;
                <span>DONE</span>
            </div>

            {/* TEXT 2 */}
            <div className='backdrop-blur-lg text-white absolute p-8 pb-12 rounded-4xl top-25 right-10 font-bold text-4xl'
            style={{ clipPath: "polygon(20% 0%,100% 0%, 100% 150%, 0% 150%, 0% 40%)" }}>
                <span>WE'LL</span>
                &nbsp;
                <span className='text-[#CBEC5E]'>HANDLE</span>
                &nbsp;
                <span>THAT</span>

                {/* FLoating play btn */}
                <div className=' absolute w-full h-fit flex justify-center -bottom-3'>
                    <div className='flex flex-row gap-2 items-center'>
                        <div>
                            <p className='text-sm rounded-[50px] bg-[#CBEC5E] px-4 py-2 text-black font-light'>Sign Up for Contract</p>
                        </div>
                        <div className=' p-3 bg-white rounded-[50%]'>
                            <Image alt='playbtn' src={'/play.png'} height={15} width={15} className='' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Search */}

            <div className='absolute flex items-center justify-center w-full h-fit bottom-10'>
                <div className='flex flex-col gap-4 items-center'>

                    {/* Search bar */}
                    <div className='relative bg-white rounded-[50px] flex flex-row text-gray-600 items-center justify-between p-1 w-[400px]'>

                        <div className='flex flex-row items-center gap-4'>
                            <div className='relative h-7 w-7'>
                                <Image className='rounded-[50%]' alt='search' src={"/search.png"} fill />
                            </div>

                            <div className='flex-1'>
                                Find a job, talent or service
                            </div>
                        </div>

                        <div className='bg-gray-200 px-4 py-2 rounded-[50px]'>
                            <span>Talent</span>
                        </div>

                        {/* Floating bar */}

                        <div className='text-black absolute -bottom-[200%] -right-[40%] bg-white rounded-[20px] p-2'>
                            <div className='flex gap-1'>
                                <Image  src={'/people.png'} height={10} width={25} alt='people'/>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='text-xs font-semibold'>Talent</h2>
                                    <p className='text-xs'>Hire professionals effortlessly.</p>
                                </div>
                            </div>

                            <div className='flex gap-1'>
                                <Image  src={'/user.png'} height={10} width={25} alt='people'/>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='text-xs font-semibold'>Client</h2>
                                    <p className='text-xs'>Apply to jobs posted by clients.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* DOTS */}
                    <div className='flex gap-2'>
                        <div className='w-3 h-3 bg-green-400 rounded-[50%]'></div>
                        <div className='w-3 h-3 bg-green-200 rounded-[50%]'></div>
                        <div className='w-3 h-3 bg-green-200 rounded-[50%]'></div>
                        <div className='w-3 h-3 bg-green-200 rounded-[50%]'></div>
                        <div className='w-3 h-3 bg-green-200 rounded-[50%]'></div>
                    </div>

                    <div className='px-8 py-3 rounded-[50px] text-center w-fit bg-white text-black font-[900]'>
                        <span>EDUCATON AND TUTORING</span>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Hero