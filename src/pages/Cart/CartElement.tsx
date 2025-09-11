// import { useState } from "react"

import { useEffect, useState } from "react"
import { Link } from "react-router"

const CartElement = ({item, setItems}:{item:any, setItems: React.Dispatch<React.SetStateAction<any[]>>}) => {
  const [quantity, setQuantity] = useState<number>(item.quantity)

  const increaseQuantity = ()=>{
    setItems(prev=> {
      const array = [...prev]
      array[array.findIndex(i=> i.id === item.id)].quantity ++
      return array
    })
  }

  const decreaseQuantity = ()=>{
    setItems(prev=> {
      const array = [...prev]
      array[array.findIndex(i=> i.id === item.id)].quantity --
      return array
    })
  }
  
  useEffect(()=>{
    setItems(prev=> {
      const array = [...prev]
      array[array.findIndex(i=> i.id === item.id)].quantity = quantity
      return array
    })
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