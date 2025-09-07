import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from '../../components/Navbar'
import MovingImg from '/src/assets/imgs/landing.png' 
import CircularMotion from '../../components/CircularAnimate'

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
      <section className='w-full min-h-screen overflow-hidden flex flex-col bg-[#F2F6F7]'>
        <Navbar />
        <div className='flex h-full w-[80%] grow items-center justify-center basis-0 mx-auto'>
          <div className='flex-1 h-full flex flex-col justify-center items-start gap-8 pr-4'>
            <p className='text-2xl font-bold'>Welcome to our shop</p>
            <h1 className='text-5xl font-bold'>Explore Top brand Face Toner!</h1>
            <p className='text-wrap text-xl'>Predictive analytics is drastically changing the real estate industry. In the past, providing data for quick</p>
            <button className='px-8 py-3 bg-[#FFB400] text-white text-lg font-bold'>SHOP NOW</button>
          </div>
          <div className=' flex-1 h-full'>
            <CircularMotion>
              <img src={MovingImg} className='object-cover' alt="" />
            </CircularMotion>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage