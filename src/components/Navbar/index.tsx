import Logo from '/src/assets/imgs/logo.png'
import { links } from './links'
import { Link } from 'react-router'
import { FaArrowRight } from 'react-icons/fa'
import { MdOutlineSearch } from 'react-icons/md'
import { RiShoppingCart2Line, RiUserLine } from 'react-icons/ri'
import { PiShoppingCart } from 'react-icons/pi'

const Navbar = () => {
  return (
    <div className='w-full z-99 py-10 bg-white'>
        <div className='flex basis-0 w-[80%] mx-auto'>
            <div className='flex items-center flex-1 p-2'>
              <img src={Logo} className='h-full' alt="" />
            </div>
            <ul className='flex gap-12 text-md justify-center text-xl font-bold items-center flex-1'>
              {links.map((link, i)=>
                <div key={i} className='group-hover:text-[#418791] duration-150 relative group/primary select-none z-[9] cursor-pointer'>
                  <Link className='inline-block py-3' to={link.path}>{link.name}</Link>
                  {link.children&&
                  <div className='absolute group-hover/primary:opacity-100 group-hover/primary:top-[100%] group-hover/primary:scale-y-100 origin-top scale-y-95 pointer-events-none group-hover/primary:pointer-events-auto opacity-0 top-[80%] bg-white text-black shadow-lg text-sm duration-400'>
                    {link.children.map((child, x)=> 
                      <div key={x} className='relative not-first:border-t border-gray-400 text-nowrap group/secondary'>
                        <Link className='p-4 gap-3 flex justify-between items-center' to={child.path}>
                          {child.text}
                          <FaArrowRight className='text-xs'/>
                        </Link>
                      {child.children&&
                        <div className='absolute left-[90%] top-0 shadow-lg opacity-0 group-hover/secondary:opacity-100 group-hover/secondary:left-[100%]  pointer-events-none group-hover/secondary:pointer-events-auto bg-white text-black text-sm duration-400 '>
                          {child.children.map((grandchild, y)=>
                            <Link key={y} to={grandchild.path} className='flex relative justify-between items-center p-4 not-first:border-t gap-3 border-gray-400 text-nowrap'>
                              {grandchild.text}
                            </Link>
                          )}
                        </div>
                      }
                      </div>
                    )}
                  </div>
                  }
                </div>
              )}
            </ul>
            <div className='flex items-center font-test gap-8 justify-end flex-1 text-3xl'>
                <select className='text-xl font-bold'>
                  <option value='usd'>USD</option>
                </select>
                <MdOutlineSearch onClick={()=>console.log(true)} className='cursor-pointer hover:scale-[1.15] duration-200'/>
                <Link to='/'><RiUserLine className='hover:scale-[1.15] duration-200'/></Link>
                <div onClick={()=> console.log(true)} className='cursor-pointer group relative'>
                  <PiShoppingCart className='group-hover:scale-[1.15] duration-200 '/>
                  <span className='absolute -top-1 -right-2 text-xs text-gray-700 font-bold'>0</span>
                </div>
                {/* <RiMenuFill className='cursor-pointer hover:scale-[1.15] duration-75'/> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar