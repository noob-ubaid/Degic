import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
const Slider = () => {
    const slide = [
        {
            id: 1,
            heading: "Make more time for the work that matters most",
            description: "Best software platform for running an internet business.",
            image: "img/hero2.png",
          },
          {
            id: 2,
            heading: "Build more time for the work that matters most",
            description: "Best software platform for running an internet business.",
            image: "img/hero.png",
          },
          
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slide.length - 1 : prevIndex - 1
    );
  };

  const NextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slide.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { heading, description, image } = slide[currentIndex];
  return (
    <section>
        <div className='flex items-center pb-10 lg:flex-row flex-col md:justify-between justify-center mx-auto md:mx-14 lg:mx-24 md:pt-12 lg:pt-14 pt-8 '>
            {/* left side */}
            <div className='flex flex-col md:w-1/2  gap-4 md:mx-0 mx-4'>
                <img className='w-[167px] h-[70px] md:mx-0 mx-auto' src="img/logo.png" alt="" />
                <h1 className='lg:text-5xl font-inter md:text-4xl font-semibold lg:w-[463px] md:w-[400px] text-2xl md:text-left text-center'>{heading}</h1>
                <p className='text-[21px] font-inter text-gray-300 lg:w-[313px] md:w-[250px]'> {description}</p>
                <div className='flex gap-4 items-center mt-4'>
                    <button onClick={prevSlide} className='p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-all'>
                        <ChevronLeft  className='text-black '/>
                    </button>

                    <button onClick={NextSlide} className='p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-all'>
                    <ChevronRight className='text-black '/>
                    </button>
                </div>
            </div> 
            {/* right side */}
            <div className='w-full md:w-1/2'>
                <img className='w-[90%] mx-auto' src={image} alt="" />
            </div>
        </div>
        <div className='mx-auto md:mx-14 lg:mx-24'>
            <img className='w-full px-3 md:px-0 pb-10' src="img/Logos.png" alt="" />
        </div>
    </section>
  )
}

export default Slider