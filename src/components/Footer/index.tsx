import { CiLocationOn, CiMail } from 'react-icons/ci'
import Logo from '/src/assets/imgs/logo.png'
import { PiPhoneCallThin } from 'react-icons/pi'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BsSendArrowUpFill } from 'react-icons/bs'
import Features from '../Features'

const Footer = () => {
  return (
    <>
    <Features/>
    <footer className='w-full text-black bg-[#F2F6F7] pt-20'>
        <div className="w-[90%] mx-auto flex justify-between basis-0 gap-10">
            <div className='font-[Playfair] flex-2'>
                <div className='flex items-center flex-1 p-2'>
                    <img src={Logo} className='' alt="" />
                </div>
                <p className='leading-6 text-wrap'>Arowana is a premium brand dedicated to providing high-quality grooming products for </p>
                <ul className='flex flex-col gap-2 mt-4'>
                    <li className='flex items-center gap-2'>
                        <CiLocationOn className='text-xl'/>
                        <p>Brooklyn, New York, United States</p>
                    </li>
                    <li className='flex items-center gap-2 hover:text-[#FFB400] duration-200 cursor-pointer'>
                        <PiPhoneCallThin className='text-xl'/>
                        <a href='tel:+0123-456789'>+0123-456789</a>
                    </li>
                    <li className='flex items-center gap-2 hover:text-[#FFB400] duration-200 cursor-pointer'>
                        <CiMail className='text-xl'/>
                        <a href='mailto:example@example.com'>example@example.com</a>
                    </li>
                    <li className='flex items-center gap-6 mt-4 text-lg'>
                        <a className='hover:text-[#FFB400] duration-100 cursor-pointer' href='#'><FaFacebookF/></a>
                        <a className='hover:text-[#FFB400] duration-100 cursor-pointer' href='#'><FaTwitter/></a>
                        <a className='hover:text-[#FFB400] duration-100 cursor-pointer' href='#'><FaLinkedinIn/></a>
                        <a className='hover:text-[#FFB400] duration-100 cursor-pointer' href='#'><FaYoutube/></a>
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>Company</h1>
                <div className='flex flex-col gap-6 mt-4'>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>About</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>Blog</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>All Products</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>Locations Map</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>FAQ</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>Contact Us</a>
                </div>
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>Services</h1>
                <div className='flex flex-col gap-6 mt-4'>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>Order Tracking</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>Wish List</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>Login</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>My account</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>Terms & Conditions</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>Promotional Offers</a>
                </div>
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>Customer Care</h1>
                <div className='flex flex-col gap-6 mt-4'>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>Login</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>My account</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>Wish List</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>Order Tracking</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>FAQ</a>
                    <a className='hover:translate-x-2 hover:text-[#FFB400] duration-200 ' href='#'>Contact Us</a>
                </div>
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-xl mb-4'>Newsletter</h1>
                <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                <div className='flex w-full items-stretch my-6'>
                    <input className="bg-white grow px-6" placeholder="Email" type="text" />
                    <button className='px-8 py-3 z-0 bg-[#FFB400] text-nowrap hover:bg-white hover:text-black border border-[#FFB400] hover:border-black duration-400 text-white text-lg font-bold shop_now cursor-pointer uppercase'><BsSendArrowUpFill/></button>
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>We Accept</h1>
                    <div className='w-full bg-white'>
                        <img src="/src/assets/imgs/payment-4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full text-center mt-20 border-t text-white border-gray-300 py-8 bg-[#071c1f]'>
            <div className='w-[90%] mx-auto flex justify-between'>
                <p className='text-sm'>&copy; 2024 Arowana. All Rights Reserved.</p>
                <div className='flex gap-6 font-bold'>
                    <a href='#' className='text-sm'>Terms & Conditions</a>
                    <a href='#' className='text-sm'>Claim</a>
                    <a href='#' className='text-sm'>Privacy & Policy</a>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer