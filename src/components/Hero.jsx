import React from 'react'

const Hero = () => {
  return (
    <>
        <section className='flex items-center flex-col-reverse lg:flex-row my-6 md:mx-28 lg:mx-36 mx-4'>
            <div>
                <h2 className='font-semibold md:mt-0 mt-5 text-2xl md:text-6xl w-full md:w-[640px] md:mx-0 mx-auto text-center md:text-left '>Simply explained with illustrations</h2>
                <p className='text-[20px] text-gray-500 font-inter w-full md:w-[448px] md:mt-6 mt-4'>There are a lot of different components that will help you create the perfect look for your project</p>
                <div className='flex items-center md:justify-normal justify-center gap-4 mt-6'>
                    <button className='text-white px-4 py-2 rounded-md bg-[#5F62E2] transition-all opacity-90 hover:opacity-100  md:px-6 md:py-3 '>Get Started</button>
                    <button className='text-[#5F62E2] px-4 py-2 rounded-md bg-gray-300 transition-all opacity-90 hover:opacity-100  md:px-6 md:py-3 '>Learn more</button>
                </div>
            </div>

            <div>
                <img className='md:w-full md:h-full ' src="img/hero.png" alt="" />
            </div>
        </section>
    </>
  )
}

export default Hero