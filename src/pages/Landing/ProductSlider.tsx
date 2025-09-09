import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight, FaEye } from 'react-icons/fa';
import { PiHeart, PiShoppingCart } from 'react-icons/pi';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const ProductSlider = ({ tag }: { tag: string }) => {
  const [products, setProducts] = useState<any[]>([]);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);

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
      onSwiper={(swiper) => console.log(swiper)}
      navigation={{
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      }}
      className="relative !overflow-visible !overflow-x-clip"
    >
      <button
        ref={nextRef}
        className="absolute top-1/2 right-15 group-hover/cards:right-10 group-hover/cards:opacity-100 ease-in-out opacity-0 z-10 p-3 rounded-full border border-gray-200 cursor-pointer text-xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150"
      >
        <FaArrowRight />
      </button>
      <button
        ref={prevRef}
        className="absolute top-1/2 left-15 group-hover/cards:left-10 group-hover/cards:opacity-100 ease-in-out opacity-0 z-10 p-3 rounded-full border border-gray-200 cursor-pointer text-xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150"
      >
        <FaArrowLeft />
      </button>
      {products.map((product, i) => (
        <SwiperSlide key={i}>
          <div className="relative z-200 flex flex-col items-center gap-2 border border-gray-100 pb-6 hover:shadow-2xl duration-200 group/card">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-20 grid grid-cols-3 basis-0 bg-white shadow-xl opacity-0 duration-300 group-hover/card:-translate-1/2 group-hover/card:opacity-100 ease-in-out text-lg">
              <button className="flex-1 p-4 hover:bg-amber-400 duration-200 hover:text-white border-r border-gray-300 hover:border-amber-400 cursor-pointer">
                <FaEye />
              </button>
              <button className="flex-1 p-4 hover:bg-amber-400 duration-200 hover:text-white border-r border-gray-300 hover:border-amber-400 cursor-pointer">
                <PiShoppingCart />
              </button>
              <button className="flex-1 p-4 hover:bg-amber-400 duration-200 hover:text-white hover:border-amber-400 cursor-pointer">
                <PiHeart />
              </button>
            </div>
            <div className="h-100">
              <img className="h-full object-cover" src={product.images[0]} alt="" />
            </div>
            <p className="font-[Playfair] text-lg font-bold">{product.title}</p>
            <div className="flex items-center gap-2">
              <p
                className={`font-bold ${
                  !product.discountPercentage
                    ? 'text-amber-400'
                    : 'text-gray-300 line-through'
                }`}
              >
                {product.price}
              </p>
              {product.discountPercentage && (
                <p className="font-bold text-amber-400">
                  {Math.round(
                    product.price -
                      product.price * (product.discountPercentage / 100)
                  ) -
                    0.01}
                </p>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;