import { MdArrowForwardIos } from "react-icons/md"
import { Link } from "react-router"
import CartElement from "./CartElement"
import { useCart } from "../../context/CartContext"

const CartPage = () => {
  
  const {total, cartItems} = useCart();

  return (
    <div>
      <div className="py-20 bg-[url(/src/assets/imgs/bg/4.png)] bg-[#ECBD99] px-40">
        <h1 className="text-5xl font-bold text-white ">Cart</h1>
        <p className="text-black font-bold font-[Playfair] mt-4 flex items-center gap-2"><Link to='/'>Home</Link> <MdArrowForwardIos className="text-sm"/> <span className='text-[#071c1f]'>Cart</span></p>
      </div>
      <div className="w-[65%] mx-auto my-20 min-h-[300px]">
        <div className='flex flex-col grow overflow-y-auto relative gap-2 py-3 border-y border-gray-200'>
          {cartItems.map(item=>
            <CartElement key={item.id} item={item} />
          )}
        </div>
        <div className='flex font-bold text-lg py-4 mb-4 border-b border-gray-200 justify-between gap-4'>
            <div className="flex items-stretch">
              <input type="text" placeholder="Enter Discount Code" className='border border-gray-200 px-2 font-normal' />
              <button className='px-4 py-2 z-0 bg-[#FFB400] hover:bg-transparent border border-[#071c1f] hover:border-[#FFB400] duration-400 text-white hover:text-[#071c1f] text-lg rtl btn cursor-pointer'>Apply</button>
            </div>
            <button className='px-8 py-2 z-0 bg-[#FFB400] hover:bg-transparent hover:text-[#071c1f] border border-[#FFB400] hover:border-[#071c1f] duration-400 text-white text-lg ltr btn cursor-pointer'>Update Cart</button>
        </div>
        <div className='flex font-bold text-lg py-10 mb-4 justify-end gap-4'>
            <div className="w-100 flex flex-col">
              <h1 className="text-xl font-bold">Cart Totals</h1>
              <table className="text-[#212524] mt-4 font-light">
                <tbody>
                  <tr className='bg-gray-100 border-t border-gray-200 '>
                    <td className="font-[Playfair] p-4">Cart Subtotal:</td>
                    <td>${total.toFixed(2)}</td>
                  </tr>
                  <tr className='bg-gray-50 border-t border-gray-200 '>
                    <td className="font-[Playfair] p-4">Shipping and Handling</td>
                    <td>$15.00</td>
                  </tr>
                  <tr className='bg-gray-50 border-t border-gray-200 '>
                    <td className="font-[Playfair] p-4">VAT</td>
                    <td>$00.00</td>
                  </tr>
                  <tr className='bg-gray-50 border-t border-gray-200 font-bold text-black '>
                    <td className="font-[Playfair] p-4">Order Total</td>
                    <td>${(15.00+total).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <button className='px-8 py-3 z-0 bg-[#FFB400] hover:bg-transparent hover:text-[#071c1f] border border-[#FFB400] hover:border-[#071c1f] duration-400 text-white text-base ltr btn cursor-pointer'>Proceed To Checkout</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage