import Logo from '/src/assets/imgs/logo.png'
import { links } from './links'
import { Link } from 'react-router'
import { MdOutlineSearch } from 'react-icons/md'
import { RiUserLine } from 'react-icons/ri'
import { PiShoppingCart } from 'react-icons/pi'
import { useEffect, useState } from 'react'
import DarkBackground from '../ui/DarkBackground'
import Cart from '../Cart'
import { LightBackground } from '../ui'
import SearchBar from '../SearchBar'
import { useCart } from '../../context/CartContext'

interface Props {
  fixable?: boolean;
}

const Navbar:React.FC<Props> = ({fixable}) => {
  const [scroll, setScroll] = useState<number>(0)
  const [showCart, setShowCart] = useState<boolean>(false)
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false)
  const {cartItems} = useCart()

  const handleScroll = ()=>{
    setScroll(window.scrollY)
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll, {passive: true})
    
    return ()=>window.removeEventListener('scroll', handleScroll)
  },[])
  
  return (
    <div className={`w-full z-99 py-[10px] bg-white text-black duration-150 ${fixable&& scroll>200?'fixed animate-slide-in z-300 shadow-xl': 'relative'}`}>
      
      {/* CART COMPONENT */}
      <DarkBackground {... {setShow: (v)=> setShowCart(v), show: showCart}} />
      <Cart {...{setShow: (v)=> setShowCart(v), show: showCart}}/>

      <LightBackground {...{setShow: (v)=> setShowSearchbar(v), show: showSearchbar}} />
      <SearchBar {...{showSearchbar, setShowSearchbar: (v)=> setShowSearchbar(v)}} />

        <div className='flex w-[80%] mx-auto'>
            <div className='flex items-center flex-1 p-2'>
              <img src={Logo} className='' alt="" />
            </div>
            <ul className='flex gap-12 text-md justify-center font-bold items-center flex-1'>
              {links.map((link, i)=>
                <div key={i} className='duration-150 relative group/primary select-none z-[9] cursor-pointer'>
                  <Link className='inline-block py-5 text-nowrap' to={link.path}>{link.name}</Link>
                  {link.children&&
                  <div className='absolute border-t-4 py-4 text-nowrap border-[#FFB400] group-hover/primary:opacity-100 group-hover/primary:top-[100%] group-hover/primary:scale-y-100 origin-top scale-y-95 pointer-events-none group-hover/primary:pointer-events-auto opacity-0 top-[80%] bg-white text-black shadow-lg text-sm w-50 left-1/2 -translate-x-1/2 duration-400'>
                    {link.children.map((child, x)=> 
                        <Link key={x} className='block text-nowrap group/secondary hover:text-[#FFB400] duration-200 w-full px-8 py-3' to={child.path}>
                          {child.text}
                        </Link>
                    )}
                  </div>
                  }
                </div>
              )}
            </ul>
            <div className='flex items-center font-test gap-6 justify-end text-xl flex-1'>
                <select className='font-bold font-[Playfair] text-base'>
                  <option value='usd'>USD</option>
                </select>
                <MdOutlineSearch onClick={()=>setShowSearchbar(true)} className='cursor-pointer hover:scale-[1.15] duration-200'/>
                <Link to='/'><RiUserLine className='hover:scale-[1.15] duration-200'/></Link>
                <div onClick={()=> setShowCart(true)} className='cursor-pointer group relative'>
                  <PiShoppingCart className='group-hover:scale-[1.15] duration-200 '/>
                  <span className='absolute -top-1 -right-2 text-xs text-gray-700 font-bold'>{cartItems.length}</span>
                </div>
                {/* <RiMenuFill className='cursor-pointer hover:scale-[1.15] duration-75'/> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar