import axios from 'axios';
import { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { PiHeart, PiShoppingCart } from 'react-icons/pi'

const Fifth = () => {
  const [products, setProducts] = useState<any[]>([]);
  
    const refetch = async () => {
      setProducts([]);
      await axios
        .get('https://dummyjson.com/products/category/mens-watches?limit=3')
        .then(({ data }) => {
          setProducts(data.products);
        });
    };
  
    useEffect(() => {
      refetch();
    }, []);
  return (
    <section className='w-full py-30 !overflow-visible flex flex-col items-center gap-8 justify-center'>  
        <h1 className='text-5xl font-bold'>Grooming Tools</h1>
        <p className='font-[Playfair] text-base'>There are many variations of passages of Lorem Ipsum available.</p>

        <div className="mt-6 w-[80%] py-2 flex basis-0 gap-8 !overflow-visible">
        {products.map((product, i) => (
          <div key={i} className="relative z-200 flex flex-col items-center gap-2 border border-gray-100 pb-6 hover:shadow-2xl duration-200 group/card">
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
      ))}
        </div>
    </section>
  )
}

export default Fifth