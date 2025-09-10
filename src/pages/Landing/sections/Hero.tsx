import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import Navbar from '../../../components/Navbar'
import Slide1 from '../hero-slides/Slide1'
import Slide2 from '../hero-slides/Slide2'

import { Navigation } from 'swiper/modules'
import { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const Hero = () => {
  const swiperRef = useRef<SwiperType|null>(null)

  return (
    <section className='w-full relative group h-screen flex flex-col bg-[#F2F6F7]'>
        
        <div className='w-full h-full overflow-hidden'>
          <Swiper 
            onSwiper={(swiper: any) => (swiperRef.current = swiper)}
            modules={[Navigation]}
            className='w-full relative'>
            <SwiperSlide >
              <Slide1/>
            </SwiperSlide>
            <SwiperSlide>
              <Slide2/>
            </SwiperSlide>
            <div onClick={()=>swiperRef.current?.slideNext()} className='absolute top-1/2 right-15 group-hover:right-10 -translate-y-1/2 group-hover:opacity-100 ease-in-out opacity-0 z-10 p-6 border border-gray-200 cursor-pointer text-2xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150'><FaArrowRight/></div>
            <div  onClick={()=>swiperRef.current?.slidePrev()} className='absolute top-1/2 left-15 group-hover:left-10 -translate-y-1/2 group-hover:opacity-100 ease-in-out opacity-0 z-10 p-6 border border-gray-200 cursor-pointer text-2xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150'><FaArrowLeft/></div>
          </Swiper>
        </div>
    </section>
  )
}

export default Hero