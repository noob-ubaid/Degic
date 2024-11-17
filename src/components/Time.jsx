import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Time = () => {
  return (
    <section>
        <div className='flex  items-center my-10 lg:mx-0 mx-4 flex-col lg:flex-row gap-10'>
            <div className='w-full flex justify-center lg:w-1/2'>
                <img src="img/candle.png" alt="" />
            </div>

            <div className='w-full  lg:w-1/2'>
                <div className='flex flex-col lg:items-start items-center'>
                    <h2 className='text-center lg:text-left text-2xl md:text-4xl lg:text-5xl font-semibold font-inter'>Make more time for the work</h2>
                    <div>
                        <div className='flex items-center mt-3 gap-3'>
                            <img src="img/sotik.png" alt="" />
                            <h2 className='font-inter text-[18px] lg:text-[21px]'>Many ways to use illustrations in design</h2>
                        </div>

                        <div className='flex items-center mt-3  gap-3'>
                            <img src="img/sotik.png" alt="" />
                            <h2 className='font-inter text-[18px] lg:text-[21px]'>Simply explained with illustrations</h2>
                        </div>

                        <div className='flex items-center mt-3  gap-3'>
                            <img src="img/sotik.png" alt="" />
                            <h2 className='font-inter text-[18px] lg:text-[21px]'>Make more time for the work</h2>
                        </div>
                        <button className='text-[#5F62E2] px-4 py-2 mt-7 rounded-md bg-gray-300 transition-all hover:bg-[#5F62E2] hover:text-white  md:px-6 md:py-3 '>Learn more 
                            <ArrowForwardIcon className='pl-1 text-2xl'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Time