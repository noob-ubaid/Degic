import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Presentation = () => {
    const card = [
        {
            img:"img/management.png",
            heading:"Managment",
            title:"Software platform for running your new internet business"
        },

        {
            img:"img/entertainment.png",
            heading:"Entertainment",
            title:"Software platform for running your new internet business"
        },

        {
            img:"img/marketing.png",
            heading:"Marketing",
            title:"Software platform for running your new internet business"
        },

        {
            img:"img/reference.png",
            heading:"References",
            title:"Software platform for running your new internet business"
        }
    ];
    const socialMedia = [
        {
            social:"img/facebook.png"
        },
        {
            social:"img/insta.png"
        },
        {
            social:"img/twitter.png"
        }
    ]
  return (
    <section className='bg-gray-200'>
        <div className='mx-auto md:mx-14 flex-col lg:flex-row lg:mx-20 flex py-24 items-start gap-14'>
            {/* left side */}
            <div className='grid grid-cols-1 mx-auto md:mx-0 sm:grid-cols-2  lg:w-1/2 gap-6 w-full'>
                {
                    card.map((data,index) => (
                        <div key={index} className='bg-white md:mx-0 mx-auto hover:bg-gray-100 transition-all p-4 flex-col gap-3 flex items-center justify-center rounded-md'>
                            <img src={data.img} alt="" />
                            <h2 className='font-inter text-2xl font-medium'>{data.heading}</h2>
                            <p className='font-inter text-center text-[17px] w-[236px] text-gray-400'>{data.title}</p>
                        </div>
                    ))
                }
            </div>
            {/* right side */}
            <div className='w-full lg:w-1/2 '>
                <h3 className='font-semibold text-center md:text-left mx-3 md:mx-0 mb-4 md:mb-6 font-inter text-3xl md:text-4xl lg:text-5xl '>The quickest way to create modern presentation</h3>
                <p className='text-gray-600 mx-3 md:mx-0 text-[21px] font-inter text-center md:text-left'>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>
                <div className='flex items-center justify-center md:justify-start'>
                    <button className='text-[#5F62E2] px-4 py-2 mt-7 rounded-md bg-gray-300 transition-all opacity-90 hover:opacity-100  md:px-6 md:py-3 '>Explore All 
                        <ArrowForwardIcon className='pl-1 text-2xl'/>
                    </button>
                </div>
                <h3 className='text-[16px] md:mt-28 mt-10 text-center md:text-left text-gray-600 font-inter'>Follow us</h3>
                <div className="flex items-center md:mt-7 mt-4 justify-center md:justify-normal gap-4">
                    {
                        socialMedia.map((media,index) =>(
                            <div key={index}>
                                <img className='cursor-pointer' src={media.social} alt="" />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    </section>
  )
}

export default Presentation