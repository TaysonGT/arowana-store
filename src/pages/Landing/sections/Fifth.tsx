import axios from 'axios';
import { useEffect, useState } from 'react'
import { ProductCard } from '../../../components/ui';

const Fifth = () => {
  const [products, setProducts] = useState<any[]>([]);
  
    const refetch = async () => {
      setProducts([]);
      await axios
        .get('https://dummyjson.com/products/category/mens-watches?limit=3')
        .then(({ data }) => {
          setProducts(data.products);
        });
    };
  
    useEffect(() => {
      refetch();
    }, []);
  return (
    <section className='w-full py-30 !overflow-visible flex flex-col items-center gap-8 justify-center'>  
        <h1 className='text-5xl font-bold'>Grooming Tools</h1>
        <p className='font-[Playfair] text-base'>There are many variations of passages of Lorem Ipsum available.</p>
        <div className="mt-6 w-[80%] py-2 flex basis-0 gap-8 !overflow-visible">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
        </div>
    </section>
  )
}

export default Fifth