import React from 'react'
import { IoClose, IoRemoveCircle } from 'react-icons/io5'
import { RiCloseFill } from 'react-icons/ri'
import { useNavigate } from 'react-router'
import { useCart } from '../context/CartContext'

interface Props {
    show: boolean,
    setShow: (arg0: boolean) => void
}

const Cart:React.FC<Props> = ({show, setShow})=>{
    const nav = useNavigate()
    const {total, cartItems, removeFromCart, clearCart} = useCart()

    return (
        <div className={`fixed flex flex-col ${!show&&'pointer-events-none'} top-0 h-screen bg-white text-black left-full duration-300 z-[200] p-10 w-100 ${show&& '-translate-x-full'}`}>
            <div className='flex flex-col gap-1 border-b-1 border-gray-400 pb-6 relative'>
                <h1 className='text-lg font-bold font-[Playfair]'>Cart</h1>
                <RiCloseFill onClick={()=>setShow(false)} className='text-red-700 hover:text-red-400 duration-150 cursor-pointer text-3xl absolute top-0 right-0'/>
            </div>
            <div className='flex flex-col grow overflow-y-auto relative gap-2 py-3'>
                {cartItems.length>0?
                <><div onClick={clearCart} className='rounded-sm bg-red-600 text-white px-3 py-2 font-bold text-sm self-start cursor-pointer hover:bg-red-400 duration-200 flex items-center gap-2'><IoRemoveCircle className='text-lg'/> Clear</div>
                {cartItems.map(item=>
                <div className='relative py-4 shrink-0 flex items-start shadow-soft text-sm select-none group border-b border-gray-200 overflow-hidden' key={item.id}>
                    <div onClick={()=>removeFromCart(item.id)} className='absolute top-4 right-0 shadow-md z-200 -translate-1/2 rounded-full bg-white hover:bg-red-500 hover:text-white duration-150 cursor-pointer p-1'><IoClose/></div>
                    <div className='relative w-20 shrink-0 bg-[#F2F6F7]'>
                        <img className='w-full object-cover' src={item.thumbnail} alt="" />
                    </div>
                    <div className='px-6 grow truncate min-w-0'>
                        <p className='text-nowrap font-bold text-lg truncate min-w-0'>{item.title}</p>
                        <p className='text-lg'>{item.quantity}x ${item.price}</p>
                    </div>
                </div>
                )}
                </>:
                <p className='text-center font-[Playfair] text-lg mt-10 text-gray-600'>Your cart is currently empty.</p>
                }
            </div>
            <div className='flex font-bold text-lg py-4 mb-4 border-y border-gray-200 justify-between gap-4'>
                <p>Subtotal:</p>
                <p className='text-[#FFB400]'>${total.toFixed(2)}</p>
            </div>
            <div className='flex mt-auto justify-between gap-4'>
                <button onClick={()=>{
                    nav('/cart')
                    setShow(false)
                    }} className='px-8 py-2 z-0 bg-[#FFB400] hover:bg-transparent hover:text-[#071c1f] border border-[#FFB400] hover:border-[#071c1f] duration-400 text-white text-lg ltr btn cursor-pointer'>View Cart</button>
                <button onClick={()=>{
                    nav('/checkout')
                    setShow(false)
                    }} className='px-8 py-2 z-0 bg-[#FFB400] hover:bg-transparent border border-[#071c1f] hover:border-[#FFB400] duration-400 text-white hover:text-[#071c1f] text-lg rtl btn cursor-pointer'>Checkout</button>
            </div>
            <p className='mt-4 font-[Playfair]'>Free Shippping on All Orders Over $100!</p>
        </div>
    )
}

export default Cart