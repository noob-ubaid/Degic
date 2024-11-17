import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const card = [
    {
        img:"img/img 1.png",
        heading:"Make myspace your best designed space",
        para:"A lot of different components that will help you create the perfect look for your project",
        btn:"Design"
    },

    {
        img:"img/img 2.png",
        heading:"My company culture has changed today",
        para:"A lot of different components that will help you create the perfect look for your project",
        btn:"3D illustrations"
    },

    {
        img:"img/img 3.png",
        heading:"Professionals in craft! All products were super great",
        para:"A lot of different components that will help you create the perfect look for your project",
        btn:"Development"
    }
]
const Blog = () => {
  return (
    <section className='w-full mt-10 lg:px-24 md:px-16 px-4 lg:mt-20'>
        <div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-medium'>Get more from our blog</h2>
            <div className='flex items-center lg:flex-row flex-col justify-between'>
                <p className='text-[21px] mt-2 font-inter w-[448px] text-[#00000080]'>There are a lot of different components that will help you create the perfect look for your project</p>
                <button className='text-[#5F62E2] px-4 py-2 mt-7 rounded-md bg-gray-300 transition-all opacity-90 hover:opacity-100  md:px-6 md:py-3 '>Explore All 
                        <ArrowForwardIcon className='pl-1 text-2xl'/>
                </button>
            </div>

            <div className='flex items-center lg:flex-row mt-6 flex-col gap-2 lg:gap-5'>
                {
                    card.map((data,index) => (
                        <div className='lg:w-[400px] w-[350px] h-[471px]'>
                            <img className='bg-[#F7F7FA] object-cover' src={data.img} alt="" />
                            <div>
                                <h3 className='lg:text-[28px] text-[25px] font-bold'>{data.heading}</h3>
                                <p className='text-[17px] text-[#00000080] font-inter mt-2'>{data.para}</p>
                                <p className='text-[#2AB691] bg-[#2AB6911C] mt-2 text-[13px] w-fit'>{data.btn}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Blog