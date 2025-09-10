import CircularMotion from '../../../components/CircularAnimate'
import RaspImg from '/src/assets/imgs/raspberry.png'

const Slide2 = () => {
  return (
    <div className='flex h-screen w-[80%] mx-auto justify-center'>  
        <div className='relative flex-1'>
            <CircularMotion>
                <div className=''>
                    <img src={RaspImg} className='object-cover ' alt="" />
                </div>
            </CircularMotion>
        </div>
        <div className='flex-1 h-full flex flex-col justify-center items-start gap-8 pr-4 z-99'>
          <p className='text-2xl font-bold'>Welcome to our shop</p>
          <h1 className='text-5xl font-bold'>Explore Top Brand Face Toner!</h1>
          <p className='text-wrap text-xl font-[Playfair]'>Predictive analytics is drastically changing the real estate industry. In the past, providing data for quick</p>
          <button className='px-8 py-3 z-0 bg-[#FFB400] hover:bg-transparent hover:text-black border border-[#FFB400] hover:border-black duration-400 text-white text-lg font-bold ltr cursor-pointer'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Slide2