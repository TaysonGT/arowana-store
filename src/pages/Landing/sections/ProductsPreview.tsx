import { useState } from "react"
import ProductSlider from "../ProductSlider"

const ProductsPreview = () => {
  const [tag, setTag] = useState<string>('popular')
 
  return (
    <section className='w-full py-30 flex flex-col items-center gap-8 justify-center'>
        <h1 className='text-5xl font-bold'>Our Products</h1>
        <p className='font-[Playfair] text-base'>There are many variations of passages of Lorem Ipsum available.</p>
        <div className='flex gap-4'>
            <button onClick={()=>setTag('popular')} className={`px-8 py-3 bg-transparent border-1 cursor-pointer text-lg font-bold uppercase ${tag==='popular'?'border-black text-black': 'border-gray-300 text-gray-300'}`}>Popular</button>
            <button onClick={()=>setTag('new')} className={`px-8 py-3 bg-transparent border-1 cursor-pointer text-lg font-bold uppercase ${tag==='new'?'border-black text-black': 'border-gray-300 text-gray-300'}`}>New</button>
            <button onClick={()=>setTag('sale')} className={`px-8 py-3 bg-transparent border-1 cursor-pointer text-lg font-bold uppercase ${tag==='sale'?'border-black text-black':'border-gray-300 text-gray-300'}`}>Best Sale</button>
        </div>
        <div className="mt-6 w-[80%] py-2 group/cards">
            <ProductSlider tag={tag}/>
        </div>
    </section>
  )
}

export default ProductsPreview