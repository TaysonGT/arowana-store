import { GiReturnArrow } from 'react-icons/gi'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { PiMedal } from 'react-icons/pi'
import { RiCustomerService2Line } from 'react-icons/ri'

const Nineth = () => {
  return (
    <section className='w-full flex mx-auto px-20 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:-z-1 before:bg-[#F2F6F7]'>
        <div className='flex w-full bg-white shadow-xl py-8'>
            <div className='flex items-center gap-6 px-6 border-r border-gray-300'>
                <LiaShippingFastSolid className='text-5xl text-gray-600'/>
                <div>
                    <p className='text-xl font-bold mb-2'>Free home delivery</p>
                    <p className='font-[Playfair]'>Provide free home delivery for all product over $100</p>
                </div>
            </div>
            <div className='flex items-center gap-6 px-6 border-r border-gray-300'>
                <PiMedal className='text-5xl text-gray-600'/>
                <div>
                    <p className='text-xl font-bold mb-2'>Quality Products</p>
                    <p className='font-[Playfair]'>We ensure the product quality that is our main goal</p>
                </div>
            </div>
            <div className='flex items-center gap-6 px-6 border-r border-gray-300'>
                <GiReturnArrow className='text-5xl text-gray-600'/>
                <div>
                    <p className='text-xl font-bold mb-2'>3 Days Return</p>
                    <p className='font-[Playfair]'>Return product within 3 days for any product you buy</p>
                </div>
            </div>
            <div className='flex items-center gap-6 px-6'>
                <RiCustomerService2Line className='text-5xl text-gray-600'/>
                <div>
                    <p className='text-xl font-bold mb-2'>Online Support</p>
                    <p className='font-[Playfair]'>We ensure the product quality that you can trust easily</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Nineth