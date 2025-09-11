import axios from 'axios'
import { useEffect, useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import PaymentImg from '/src/assets/imgs/payment-4.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt, FaTwitter, FaUser } from 'react-icons/fa'
import { MdArrowForwardIos, MdOutlineCompareArrows } from 'react-icons/md'
import { Link, useParams } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Loader } from '../../components/ui'

const ProductPage = () => {
  const {id} = useParams<{id:string}>()
  const [product, setProduct] = useState<any|null>(null)
  const [relatedProducts, setRelatedProducts] = useState<any[]>([])
  const [quantity, setQuantity] = useState<number>(1)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSector, setSelectedSector] = useState<'description'|'reviews'>('description')
  
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`).then(({data})=>{
      setProduct(data)
        axios.get(`https://dummyjson.com/products/category/${data.category}?limit=5`).then(({data})=>{
            setRelatedProducts(data.products.filter((p:any)=> p.id != id))
        })
    }).finally(()=>setIsLoading(false))
  },[id])

  return (
      <div>
        <div className="py-20 bg-[url(/src/assets/imgs/bg/4.png)] bg-[#ECBD99] px-40">
            <h1 className="text-5xl font-bold text-white ">Product Details</h1>
            <p className="text-black font-bold font-[Playfair] mt-4 flex items-center gap-2">Home <MdArrowForwardIos className="text-sm"/> <span className='text-[#071c1f]'>Product Details</span></p>
        </div>
        {isLoading?
            <div className='flex justify-center items-center py-30'>
                <Loader size={50} thickness={10}/>
            </div>
        :!product?
        <div className="flex flex-col justify-center py-30 items-center gap-4">
            <h1 className="text-gray-600 font-bold text-6xl">404</h1>
            <h1 className="text-gray-600 text-2xl">Product Not Found!</h1>
        </div>
        :
        <>
        <div className='flex basis-0 gap-16 w-[80%] mx-auto py-20'>
            <div className='w-2/3'>
                <div className='flex gap-10'>
                    <div className='flex-1'>
                        <div className='h-100 bg-[#F2F6F7]'>
                            <img className='h-full object-cover' src={product?.images[selectedImage]} alt="lol" />
                        </div>
                        <div className='w-100 h-24 mt-2 overflow-hidden'>
                            <Swiper 
                            spaceBetween={4}
                            slidesPerView={4}
                            modules={[Navigation]}
                            navigation={true}
                            className='h-full'>
                                {product?.images.map((img:string, i:number)=>
                                    <SwiperSlide>
                                        <img key={i} onClick={()=>setSelectedImage(i)} className={`w-24 border cursor-pointer bg-[#F2F6F7] ${i===selectedImage? 'border-[#FFB400]': 'border-transparent'}`} src={img} alt="" />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex gap-2 text-xl text-[#FFB400]'>
                            {[...Array(Math.floor(product?.rating)||0)].map((_, i)=>
                                <FaStar key={i}/>
                            )}
                            {product?.rating%1!==0&& <FaStarHalfAlt/>}
                            {[...Array(5-(Math.ceil(product?.rating))||0)].map((_, i)=>
                                <FaRegStar key={i+5}/>
                            )}
                            <p className='text-base'>(95 Reviews)</p>
                        </div>
                        <h1 className='text-2xl font-bold mt-4'>{product?.title}</h1>
                        <div className='flex items-center gap-4 text-[#FFB400] mt-4 font-bold'>
                            <p className='text-5xl font-bold'>${product?.price}</p>
                            {product?.discountPercentage>0&& <p className='line-through text-3xl opacity-50'>${(product?.price/(1-product?.discountPercentage/100)).toFixed(2)}</p>}
                        </div>
                        <p className='text-md text-gray-500 mt-4'>{product?.description}</p>
                        <div className='mt-4 py-6 flex items-center gap-4 border-y border-gray-200 font-[Playfair]'>
                            <p className='text-gray-600'>Categories:</p>
                            <p className='capitalize font-bold'>{product?.category}, {product?.brand}</p>
                        </div>
                        <div className='mt-4 flex gap-4'>
                            <div className="flex items-stretch">
                                <button onClick={()=>setQuantity(prev=>prev-1)} className="border border-gray-200 p-2 w-10 aspect-square">-</button>
                                <input onChange={(e)=>setQuantity(parseInt(e.currentTarget.value))} className="text-center flex items-center justify-center border border-gray-300 w-10 aspect-square" type="number" min={1} value={quantity} />
                                <button onClick={()=>setQuantity(prev=>prev+1)} className="border border-gray-200 p-2 w-10 aspect-square">+</button>
                            </div>
                            <button className='text-white px-8 py-3 font-bold hover:bg-transparent cursor-pointer hover:text-black hover:border-black border border-[#FFB400] ltr duration-300 text-nowrap flex items-center gap-2'><FaShoppingCart/> Add to Cart</button>
                        </div>
                        <div className='flex gap-6 mt-4'>
                            <button className='flex gap-2 items-center font-[Playfair] font-bold hover:text-[#FFB400] duration-200 cursor-pointer'><BiHeart className='text-xl'/>Add to Wishlist</button>
                            <button className='flex gap-2 items-center font-[Playfair] font-bold hover:text-[#FFB400] duration-200 cursor-pointer'><MdOutlineCompareArrows className='text-xl'/>Compare</button>
                        </div>
                        <div className='mt-4 py-6 flex items-center gap-4 border-y border-gray-200 font-[Playfair]'>
                            <p className='text-gray-600'>Share:</p>
                            <div className='flex items-center gap-6'>
                                <a className='hover:text-[#FFB400] duration-100 cursor-pointer' href='#'><FaFacebookF/></a>
                                <a className='hover:text-[#FFB400] duration-100 cursor-pointer' href='#'><FaTwitter/></a>
                                <a className='hover:text-[#FFB400] duration-100 cursor-pointer' href='#'><FaLinkedinIn/></a>
                                <a className='hover:text-[#FFB400] duration-100 cursor-pointer' href='#'><FaInstagram/></a>
                            </div>
                        </div>
                        <div className='py-6 border-gray-200'>
                            <p className='font-bold text-lg'>Guaranteed Safe Checkout</p>
                            <div className='bg-white mt-4'>
                                <img src={PaymentImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex border-b border-gray-300 font-bold font-[Roboto] text-lg gap-8">
                        <button onClick={()=>setSelectedSector('description')} className={`py-4 border-b-3 cursor-pointer duration-200 ${selectedSector==='description'? 'border-[#FFB400] text-[#ffb400]':'border-transparent'}`}>Description</button>
                        <button onClick={()=>setSelectedSector('reviews')} className={`py-4 border-b-3 cursor-pointer duration-200 ${selectedSector==='reviews'? 'border-[#FFB400] text-[#ffb400]':'border-transparent'}`}>Reviews ({product?.reviews.length})</button>
                    </div>
                    <div>
                        {selectedSector==='description'&&
                            <div className='py-10 text-gray-600 leading-7'>
                                <p className=' text-black font-bold text-lg'>{product?.description}</p>
                                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at quam a urna fermentum euismod. Nullam non justo vitae odio cursus tincidunt. Sed vel augue at nisi sodales fermentum. Integer euismod, nunc vel congue facilisis, nunc urna aliquet nunc, eu aliquet nunc nunc eu nunc.</p>
                                <p className='mt-4'>Phasellus euismod, nunc vel congue facilisis, nunc urna aliquet nunc, eu aliquet nunc nunc eu nunc. Donec euismod, nunc vel congue facilisis, nunc urna aliquet nunc, eu aliquet nunc nunc eu nunc.</p>
                            </div>
                        }
                        {selectedSector==='reviews'&&
                            <div className='text-gray-600'>
                                {product?.reviews.length<1?
                                    <p className='py-20'>No reviews yet!</p>
                                    :
                                    product?.reviews.map((review:any, i:number)=>
                                        <div key={i} className='py-4 flex items-center gap-6 w-full border-b border-gray-200'>
                                            <div className='rounded-full text-5xl flex items-center justify-center w-25 shrink-0 aspect-square bg-[#f2f6f7]'>
                                                <FaUser/>
                                            </div>
                                            <div className='grow'>
                                                <div className='flex justify-between items-center w-full'>
                                                    <div>
                                                        <p className='font-bold text-black text-xl mt-2'>{review.reviewerName}</p>
                                                        <p className='text-sm'>{review.reviewerEmail}</p>
                                                    </div>
                                                    <div className='flex gap-2 text-[#FFB400]'>
                                                        {[...Array(Math.floor(review.rating)||0)].map((_, i)=>
                                                            <FaStar key={i}/>
                                                        )}
                                                        {review.rating%1!==0&& <FaStarHalfAlt/>}
                                                        {[...Array(5-(Math.ceil(review.rating))||0)].map((_, i)=>
                                                            <FaRegStar key={i+5}/>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className='mt-2 font-[Playfair] text-black text-lg'>{review.comment}</p>
                                                <p className='text-sm text-gray-500 mt-2'>{new Date(review.date).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 w-1/3 shrink-0">
                <div className="p-10 shadow-lg">
                    <h1 className="text-xl font-bold border-b border-gray-200 pb-4">Related Products</h1>
                    <div className="flex flex-col gap-4">
                        {relatedProducts?.map((rProduct, i)=>
                            <div key={i} className="flex gap-6 items-center py-3 not-last:border-b border-gray-200">
                                <div className='h-25'>
                                    <Link to={`/products/${rProduct.id}`}><img src={rProduct.thumbnail} className='h-full' alt="" /></Link>
                                </div>
                                <div className='grow flex flex-col gap-2'>
                                    <div className='flex gap-2 text-[#FFB400]'>
                                        {[...Array(Math.floor(rProduct.rating)||0)].map((_, i)=>
                                            <FaStar key={i}/>
                                        )}
                                        {rProduct.rating%1!==0&& <FaStarHalfAlt/>}
                                        {[...Array(5-(Math.ceil(rProduct.rating))||0)].map((_, i)=>
                                            <FaRegStar key={i+5}/>
                                        )}
                                    </div>
                                    <p className="capitalize font-bold font-sans">{rProduct.title}</p>
                                    <div className='text-[#FFB400] font-bold items-center gap-4 flex text-sm'>
                                        <p >${rProduct.price}</p>
                                        {rProduct?.discountPercentage>0&&
                                            <p className='line-through opacity-60 mr-2'>${(rProduct?.price/(1-rProduct?.discountPercentage/100)).toFixed(2)}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full overflow-hidden shadow-lg">
                    <Link to='#'>
                        <img className="h-full" src="/src/assets/imgs/promo/13.jpg" alt="" />
                    </Link>
                </div>
            </div>
        </div>
        </>}
    </div>
  )
}

export default ProductPage