import { FaEye } from 'react-icons/fa'
import { PiHeart, PiShoppingCart } from 'react-icons/pi'

const ProductCard = ({product}:{product:any}) => {
  return (
    <div className="relative flex flex-col items-center gap-2 border border-gray-100 p-6 hover:shadow-2xl duration-200 group/card">
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
        <div className="min-h-50">
            <a href='#'>
                <img className="h-full object-cover" src={product.images[0]} alt="" />
            </a>
        </div>
        <p className="font-[Playfair] text-lg font-bold text-center">{product.title}</p>
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
  )
}

export default ProductCard