import { MdArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router'
import PaymentsImg from "/src/assets/imgs/payment-4.png"
import { useCart } from '../../context/CartContext'

const CheckoutPage = () => {
    const {total} = useCart()
  return (
    <div>
        <div className="py-20 bg-[url(/src/assets/imgs/bg/4.png)] bg-[#ECBD99] px-40">
            <h1 className="text-5xl font-bold text-white ">Checkout</h1>
            <p className="text-black font-bold font-[Playfair] mt-4 flex items-center gap-2">Home <MdArrowForwardIos className="text-sm"/> <span className='text-[#071c1f]'>Checkout</span></p>
        </div>
        <div className='flex flex-col w-[70%] mx-auto py-20'>
          <div className="mt-6 w-100 flex flex-col">
              <h1 className="text-2xl font-bold">Your Order</h1>
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
            </div>
            <div className='flex gap-2 font-bold text-lg py-4 px-8 mt-10 bg-[#F2F6F7]'>
                <p>Returning Customer?</p>
                <Link className='font-bold text-[#FFB400]' to='#'>Click here to login</Link>
            </div>
            <div className='flex gap-2 font-bold text-lg py-4 px-8 bg-[#F2F6F7] mt-8'>
                <p>Have a coupon?</p>
                <Link className='font-bold text-[#FFB400]' to='#'>Click here to enter your code</Link>
            </div>
            
            <div className='mt-6'>
                <h1 className='text-2xl font-bold mt-10'>Billing Details</h1>
                <form action="" className='grid grid-cols-2 gap-6 mt-6 p-10 border border-gray-200 rounded-sm'>
                    <input type="text" placeholder='First Name *' className='border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#FFB400] duration-150'/>
                    <input type="text" placeholder='Last Name *' className='border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#FFB400] duration-150'/>
                    <input type="text" placeholder='Company Name (Optional)' className='border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#FFB400] duration-150 col-span-2'/>
                    <input type="text" placeholder='Country / Region *' className='border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#FFB400] duration-150'/>
                    <input type="text" placeholder='Street Address *' className='border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#FFB400] duration-150 col-span-2'/>
                    <input type="text" placeholder='Apartment, Suite, Unit etc. (Optional)' className='border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#FFB400] duration-150 col-span-2'/>
                    <input type="text" placeholder='Town / City *' className='border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#FFB400] duration-150'/>
                    <input type="text" placeholder='State / County *' className='border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#FFB400] duration-150'/>
                    <input type="text" placeholder='Postcode / ZIP *' className='border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#FFB400] duration-150'/>
                    <input type="text" placeholder='Phone *' className='border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#FFB400] duration-150'/>
                    <input type="email" placeholder='Email Address *' className='border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#FFB400] duration-150'/>
                    <textarea placeholder='Order Notes (Optional)' className='border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#FFB400] duration-150 col-span-2'/>
                </form>
            </div>
            <div className='mt-6'>
                <h1 className='text-2xl font-bold mt-10'>Payment Method</h1>
                <div className='grid grid-cols-2 gap-6 mt-6 p-10 border border-gray-200 rounded-sm'>
                    <div className='col-span-2'>
                        <input type="radio" name="payment" id="check" className='accent-[#FFB400] mr-4'/>
                        <label htmlFor="check" className='font-bold text-lg'>Check Payments</label>
                        <p className='text-gray-500 text-sm mt-2'>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                    </div>
                    <div className='col-span-2'>
                        <input type="radio" name="payment" id="cod" className='accent-[#FFB400] mr-4'/>
                        <label htmlFor="cod" className='font-bold text-lg'>Cash on Delivery</label>
                        <p className='text-gray-500 text-sm mt-2'>Pay with cash upon delivery.</p>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex items-center'>
                            <input type="radio" name="payment" id="paypal" className='accent-[#FFB400] mr-4'/>
                            <div className='flex items-center gap-2'>
                                <label htmlFor="paypal" className='font-bold text-lg'>PayPal</label>
                                <div className='w-full bg-white'>
                                    <img src={PaymentsImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='text-gray-500 text-sm mt-2'>Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</p>
                    </div>
                    <button className='px-8 py-3 col-span-2 uppercase z-0 bg-[#FFB400] hover:bg-transparent hover:text-black border border-[#FFB400] hover:border-black duration-400 text-white text-lg font-bold ltr cursor-pointer'>Place Order</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CheckoutPage