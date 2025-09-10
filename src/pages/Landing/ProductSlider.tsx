import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ProductCard } from '../../components/ui';

const ProductSlider = ({ tag }: { tag: string }) => {
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
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slideFullyVisibleClass=''
      slidesPerView={4}
      onSwiper={(swiper) => swiperRef.current = swiper}
      className="relative !overflow-visible !overflow-x-clip "
    >
      <button
      onClick={()=>swiperRef.current?.slideNext()}
      className="absolute top-1/2 right-15 group-hover/cards:right-10 group-hover/cards:opacity-100 ease-in-out opacity-0 z-10 p-3 rounded-full border border-gray-200 cursor-pointer text-xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150"
      >
        <FaArrowRight />
      </button>
      <button
        onClick={()=>swiperRef.current?.slidePrev()}
        className="absolute top-1/2 left-15 group-hover/cards:left-10 group-hover/cards:opacity-100 ease-in-out opacity-0 z-10 p-3 rounded-full border border-gray-200 cursor-pointer text-xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150"
      >
        <FaArrowLeft />
      </button>
      {products.map((product, i) => (
        <SwiperSlide key={i}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;