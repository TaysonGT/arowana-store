import { Swiper, SwiperSlide } from 'swiper/react'
import Navbar from '../../../components/Navbar'
import Slide1 from '../hero-slides/Slide1'
import Slide2 from '../hero-slides/Slide2'

import { Navigation } from 'swiper/modules'
import { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const Hero = () => {
  const nextRef = useRef<HTMLButtonElement>(null)
  const prevRef = useRef<HTMLButtonElement>(null)

  return (
    <section className='w-full relative group h-screen flex flex-col bg-[#F2F6F7]'>
        <Navbar fixable />
        <div className='w-full grow overflow-hidden'>
          <Swiper 
            modules={[Navigation]}
            navigation={{
                nextEl: nextRef.current,
                prevEl: prevRef.current
            }}
            className='w-full relative'>
            <SwiperSlide >
              <Slide1/>
            </SwiperSlide>
            <SwiperSlide>
              <Slide2/>
            </SwiperSlide>
            <button ref={nextRef} onClick={()=>console.log('s')} className='absolute top-1/2 right-15 group-hover:right-10 -translate-y-1/2 group-hover:opacity-100 ease-in-out opacity-0 z-10 p-6 border border-gray-200 cursor-pointer text-2xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150'><FaArrowRight/></button>
            <button ref={prevRef} onClick={()=>console.log('d')} className='absolute top-1/2 left-15 group-hover:left-10 -translate-y-1/2 group-hover:opacity-100 ease-in-out opacity-0 z-10 p-6 border border-gray-200 cursor-pointer text-2xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150'><FaArrowLeft/></button>
          </Swiper>
        </div>
    </section>
  )
}

export default Hero