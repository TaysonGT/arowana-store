import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from '../../components/Navbar'
import CitrusImg from '/src/assets/imgs/citrus.png' 
// import RaspImg from '/src/assets/imgs/raspberry.png' 
import CircularMotion from '../../components/CircularAnimate'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const productsMap = ()=>{
  const [products, setProducts] = useState<any[]>([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/products/category/fragrances?limit=100')
    .then(({data})=>{
      setProducts(data.products)
    })
  },[])

  return ( 
    <div className='gap-4 flex-wrap flex grow items-center justify-center bg-blue-400 mx-auto'>              
      {products.map((p,i)=>
        <div key={i} className='w-40 h-40' onClick={()=>toast(p.title)}>
          <img src={p.images[0]}/>
        </div>
      )}
    </div>
  )
}

const LandingPage = () => {
  
  return (
    <div className='w-full h-full'>
      <section className='w-full relative group min-h-screen overflow-hidden flex flex-col bg-[#F2F6F7]'>
        <Navbar fixable />
        <div className='flex h-full w-[80%] grow items-center justify-center basis-0 mx-auto'>
          <div className='absolute top-1/2 right-15 group-hover:right-10 group-hover:opacity-100 ease-in-out opacity-0 z-10 p-6 border border-gray-200 cursor-pointer text-2xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150'><FaArrowRight/></div>
          <div className='absolute top-1/2 left-15 group-hover:left-10 group-hover:opacity-100 ease-in-out opacity-0 z-10 p-6 border border-gray-200 cursor-pointer text-2xl hover:border-[#FFB400] hover:bg-[#FFB400] hover:text-white duration-150'><FaArrowLeft/></div>
          <div className='flex gap-6 absolute bottom-20 z-10'>
            <div className='rounded-full w-3 h-3 bg-amber-400'/>
            <div className='rounded-full w-3 h-3 bg-gray-400'/>
          </div>

          <div className='flex-1 h-full flex flex-col justify-center items-start gap-8 pr-4'>
            <p className='text-2xl font-bold'>Welcome to our shop</p>
            <h1 className='text-5xl font-bold'>Explore Top Brand Face Toner!</h1>
            <p className='text-wrap text-xl'>Predictive analytics is drastically changing the real estate industry. In the past, providing data for quick</p>
            <button className='px-8 py-3 bg-[#FFB400] text-white text-lg font-bold'>SHOP NOW</button>
          </div>
          <div className=' flex-1 h-full'>
            <CircularMotion>
              <img src={CitrusImg} className='object-cover' alt="" />
            </CircularMotion>
          </div>
        </div>
      </section>
      <section className='flex h-screen w-full grow items-center justify-center basis-0'>
        <div className='w-[80%] mx-auto flex gap-8'>

          <div className='flex-1 h-full flex flex-col justify-center items-start gap-8 p-4'>
            <p className='text-2xl font-bold'>Provide the best</p>
            <h1 className='text-5xl font-bold'>Beard Oil For You</h1>
            <p className='text-wrap text-xl'>We provide the best Beard oil all over the world. We are the worldd best store for Beard Oil. You can buy our product without any hegitation because we always consus about our product quality and always maintain it properly so your can trust and this is our main goal we belive that...</p>
            <p className='text-wrap text-xl'>Some of our customer say’s that they trust us and buy our product without any hagitation because they belive us and always happy</p>
            <button className='px-8 py-3 bg-transparent border-3 border-black text-lg font-bold'>VIEW MORE</button>
          </div>
          <div className=' flex-1 h-full'>
            <img src='/src/assets/imgs/6.png' alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage