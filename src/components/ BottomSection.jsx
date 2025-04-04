import React from 'react'
import Card from './Card'
import Image from 'next/image'

const details = [
    {
        name: "Ioanna Spirou",
        desc: "Beauty and Wellness",
        rating: 4.9,
        tag: "Cosmetology",
        image: "/person1.jpeg"
    },
    {
        name: "Alexandros Markou",
        desc: "Legal and Consulting",
        rating: 4.9,
        tag: "Accounting",
        image: "/person2.jpeg"
    },
    {
        name: "Sofia Nikolaidis",
        desc: "Education & Tutoring",
        rating: 4.9,
        tag: "Math Tutoring",
        image: "/person3.jpeg"
    },
    {
        name: "Eleni Papadaki",
        desc: "Event and Entertainment",
        rating: 4.9,
        tag: "Photography",
        image: "/person4.jpeg"
    },
    {
        name: "Dimitrios Vasilakis",
        desc: "Education & Tutoring",
        rating: 4.9,
        tag: "History Tutoring",
        image: "/person5.jpeg"
    },
    {
        name: "Thanos Karamanlis",
        desc: "Event and Entertainment",
        rating: 4.9,
        tag: "Videography",
        image: "/person6.jpeg"
    },


]

const BottomSection = () => {
    return (
        <div className=''>

            <div className='flex items-center justify-center'>
                <div className='h-fit m-4'>
                    <h1 className='text-2xl font-extrabold text-center my-4'>TOP TALENTS READY TO HELP</h1>
                    <div className='flex'>
                        <div className='w-1/2'></div>
                        <div className='w-1/2 bg-[#CBEC5E] h-1'></div>
                    </div>
                </div>

            </div>
            <div className='flex flex-row'>
                <div className='w-3/5 flex flex-wrap gap-4'>
                    {
                        details.map((detail, ind) => (
                            <Card key={ind} image={detail.image} name={detail.name} desc={detail.desc} rating={detail.rating} tag={detail.tag} />
                        ))
                    }
                </div>

                <div className='w-2/5 flex flex-col gap-8'>
                    <h1 className='text-[50px]/tight text-[#18470D] line-'>Work with top talents across industries for success</h1>
                    <p className='text-[#545454]'>Discover top talents across various industries— talents who are ready to make your life easier, provide essential services, or grow your business.</p>

                    <div className='flex flex-row gap-4 text-sm'>
                        <button className='bg-[#CBEC5E] text-black rounded-[39px] p-2 px-4'>Sign Up</button>
                        <button className='bg-black text-white rounded-[39px] p-2 px-4'>Contact us</button>
                    </div>

                    <div className='flex flex-col gap-2 font-bold'>
                        <div className='flex flex-row gap-2'>
                            <Image src={"/accept.png"} height={15} width={22} alt='tick' />
                            <span>Diverse Industry Specialists</span>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <Image src={"/accept.png"} height={15} width={22} alt='tick' />
                            <span>On-Demand Talent</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BottomSection