// import { useState } from "react"

import { useEffect, useState } from "react"
import { Link } from "react-router"
import { useCart } from "../../context/CartContext";

const CartElement = ({item}:{item:any}) => {
  const [quantity, setQuantity] = useState<number>(item.quantity)

  const { editItemQuantity } = useCart();


  const increaseQuantity = ()=>{
    setQuantity(prev=> prev+1)  
  }

  const decreaseQuantity = ()=>{
    setQuantity(prev=> Math.max(1, prev-1))
  }
  
  useEffect(()=>{
    editItemQuantity(item.id, quantity)
  },[quantity])

  return (
    <div className='relative py-4 flex justify-between w-full items-center shadow-soft text-sm select-none group border-b border-gray-200' key={item.id}>
        <div className='relative h-30'>
            <Link to={`/products/${item.id}`}><img className='h-full object-cover' src={item.thumbnail} alt="" /></Link>
        </div>
        <p className='text-nowrap font-bold text-xl '>{item.title}</p>
        <p className='text-lg '>${item.price}</p>
        <div className="flex items-stretch">
          <button onClick={decreaseQuantity} className="border border-gray-200 p-2 w-10 aspect-square">-</button>
          <input onChange={(e)=>setQuantity(parseInt(e.currentTarget.value))} className="text-center flex items-center justify-center border border-gray-300 w-10 aspect-square" type="number" min={1} value={item.quantity} />
          <button onClick={increaseQuantity} className="border border-gray-200 p-2 w-10 aspect-square">+</button>
        </div>
        <p className='text-lg font-bold'>${(item.price*item.quantity).toFixed(2)}</p>
    </div>
  )
}

export default CartElement