import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import testjson from '/src/assets/testimonials.json'
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa'

const Sixth = () => {
  const nextRef = useRef<HTMLButtonElement>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const testimonials:any[] = testjson.testimonials

  return (
    <section className='w-[70%] mx-auto relative group py-20'>
        
        <button ref={nextRef} className='absolute rounded-full top-1/2 right-5 group-hover:right-10 -translate-y-1/2 group-hover:opacity-100 ease-in-out opacity-0 z-10 p-4 border border-gray-200 cursor-pointer text-2xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150'><FaArrowRight/></button>
        <button ref={prevRef} className='absolute rounded-full top-1/2 left-5 group-hover:left-10 -translate-y-1/2 group-hover:opacity-100 ease-in-out opacity-0 z-10 p-4 border border-gray-200 cursor-pointer text-2xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150'><FaArrowLeft/></button>
        <Swiper 
        modules={[Navigation]}
        navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current
        }}
        className='w-[80%] mx-auto text-center relative'>
        {testimonials.map((testimonial, i) =>
            <SwiperSlide key={i}>
                <div className='flex flex-col items-center gap-15'>
                    <FaQuoteRight className='text-5xl text-[#FFB400]' />
                    <h3 className='font-light text-5xl'>{testimonial.content}</h3>
                    <p className='font-bold text-xl text-center italic'>" {testimonial.name} "</p>
                </div>
            </SwiperSlide>
        )}
        </Swiper>
    </section>
  )
}

export default Sixth