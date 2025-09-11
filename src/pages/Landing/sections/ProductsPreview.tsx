import { useState, useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from 'swiper'
import { Navigation } from "swiper/modules"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { ProductCard } from "../../../components/ui"
import axios from 'axios'

const ProductsPreview = () => {
  const [tag, setTag] = useState<string>('popular')
  const [products, setProducts] = useState<any[]>([]);
  const swiperRef = useRef<SwiperType|null>(null)

  const refetch = async () => {
    setProducts([]);
    await axios
      .get('https://dummyjson.com/products/category/mens-watches?limit=5')
      .then(({ data }) => {
        setProducts(data.products);
      });
  };

  useEffect(() => {
    refetch();
  }, [tag]);
 
  return (
    <section className='w-full py-30 flex flex-col items-center gap-8 justify-center'>
        <h1 className='text-5xl font-bold'>Our Products</h1>
        <p className='font-[Playfair] text-base'>There are many variations of passages of Lorem Ipsum available.</p>
        <div className='flex gap-4'>
            <button onClick={()=>setTag('popular')} className={`px-8 py-3 bg-transparent border-1 cursor-pointer text-lg font-bold uppercase ${tag==='popular'?'border-black text-black': 'border-gray-300 text-gray-300'}`}>Popular</button>
            <button onClick={()=>setTag('new')} className={`px-8 py-3 bg-transparent border-1 cursor-pointer text-lg font-bold uppercase ${tag==='new'?'border-black text-black': 'border-gray-300 text-gray-300'}`}>New</button>
            <button onClick={()=>setTag('sale')} className={`px-8 py-3 bg-transparent border-1 cursor-pointer text-lg font-bold uppercase ${tag==='sale'?'border-black text-black':'border-gray-300 text-gray-300'}`}>Best Sale</button>
        </div>
        <div className=" relative w-full group/cards">
            <>
              <button
              onClick={()=>swiperRef.current?.slideNext()}
              className="absolute top-1/2 right-40 group-hover/cards:right-25 group-hover/cards:opacity-100 ease-in-out opacity-0 z-10 p-3 rounded-full border border-gray-200 cursor-pointer text-xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150"
              >
                <FaArrowRight />
              </button>
              <button
                onClick={()=>swiperRef.current?.slidePrev()}
                className="absolute top-1/2 left-40 group-hover/cards:left-25 group-hover/cards:opacity-100 ease-in-out opacity-0 z-10 p-3 rounded-full border border-gray-200 cursor-pointer text-xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150"
              >
                  <FaArrowLeft />
                </button>
            </>
            <div className="w-[80%] mx-auto py-2">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slideFullyVisibleClass=''
              slidesPerView={4}
              onSwiper={(swiper) => swiperRef.current = swiper}
              className="!overflow-visible !overflow-x-clip "
            >
              {products.map((product, i) => (
                <SwiperSlide key={i}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
        </div>
    </section>
  )
}

export default ProductsPreview