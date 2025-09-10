import axios from "axios";
import React, { useEffect, useState } from "react"
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { MdArrowForwardIos, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md"
import { Loader, ProductCard } from "../../components/ui";
import { BsArrowRight } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import Slider from '@mui/material/Slider';
import { Link, useSearchParams } from "react-router";

type pageAction = "next" | "previous" | "start" | "end"


const ProductsPage = () => {
    const [productsData, setProductsData] = useState<{products: any[], skip: number, limit: number, total: number}|null>(null);
    const [categories, setCategories] = useState<any[]>([]);
    const [value, setValue] = useState<number[]>([0, 9999]);
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchString, setSearchString] = useState<string>(searchParams.get('q')||'')
    const [pageCount, setPageCount] = useState<number>(parseInt(searchParams.get('page') || '1'))
    const [maxPages, setMaxPages] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const handlePriceChange = (_event: Event, newValue: number[], activeThumb: number) => {
        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - 10), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + 10)]);
        }
    };

    const changePage = (action: pageAction)=>{
        const page = JSON.stringify(actionNav(action, pageCount, maxPages))
        searchParams.set('page', page)
        setSearchParams(searchParams)
        setPageCount(parseInt(page))
    }

    
    const actionNav = (action: pageAction, count: number, endPage: number)=>{
        switch(action){
            case "next": return Math.min(count+1, endPage)
            case "previous": return Math.max(count-1, 1)
            case "start": return 1
            case "end": return endPage
        }
    }
    
    const handleChangeCategory = async (category:string|null) => {
        if(category){
            searchParams.set('category', category)
        }else{
            searchParams.delete('category')
        }
        searchParams.delete('page')
        searchParams.delete('q')
        setSearchString('')
        setPageCount(1)
        setSearchParams(searchParams)
    }

    const searchSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        searchParams.delete('page')
        setPageCount(1)
        if(searchString.trim().length>0){
            searchParams.set('q', searchString)
        }else{
            searchParams.delete('q')
        }
        setSearchParams(searchParams)
    }

    const refetch = async () => {
        setIsLoading(true)
        const category = searchParams.get('category')
        setProductsData(null);
        await axios
        .get(`https://dummyjson.com/products${searchString?`/search?q=${searchString}`:category?'/category/'+category:''}?limit=10&skip=${(pageCount-1)*10}`)
        .then(({ data }) => {
            setProductsData(data);
            setMaxPages(Math.ceil(data.total/10))
        });
        await axios
        .get('https://dummyjson.com/products/categories')
        .then(({ data }) => {
            setCategories(data);
        });
        setIsLoading(false)
    };

    useEffect(() => {
        refetch();
    }, [searchParams]);

  return (
    <div>
        <div className="py-20 bg-[url(/src/assets/imgs/bg/4.png)] bg-[#ECBD99] px-40">
            <h1 className="text-5xl font-bold text-white ">Shop</h1>
            <p className="text-black font-bold font-[Playfair] mt-4 flex items-center gap-2">Home <MdArrowForwardIos className="text-sm"/> <span className='text-[#071c1f]'>Shop</span></p>
        </div>
        <div className="w-[80%] flex mx-auto my-20 gap-8">
            <div className="grow flex flex-col">
                <div className="basis-0 flex">
                    <div className="flex items-center gap-4 flex-1">
                        <IoGrid/>
                        <FaList/>
                    </div>
                    <div className="flex-1 text-center font-[Playfair] text-lg">Showing {productsData&& (productsData.limit+productsData.skip===productsData.total?`${productsData.skip+1}-${productsData.total}`: `${productsData.skip+1}-${productsData.skip+productsData.limit}`)} of {productsData?.total} results</div>
                    <div className="flex-1 text-end">
                        <select className="border border-gray-300 px-4 py-2 rounded-md">
                            <option value="default">Default sorting</option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="newness">Sort by newness</option>
                            <option value="price_low">Sort by price: low to high</option>
                            <option value="price_high">Sort by price: high to low</option>
                        </select>
                    </div>
                </div>
                {isLoading?
                    <div className="flex justify-center py-40 items-center mt-10">
                        <Loader size={50} thickness={10}/>
                    </div>
                :productsData?.products.length===0?
                    <div className="flex justify-center py-40 items-center mt-10">
                        <h1 className="text-gray-600 text-2xl">No Products Found</h1>
                    </div>
                :
                <div className="grid grid-cols-3 gap-10 mt-10">
                    {productsData?.products.map((product, i)=>
                        <ProductCard key={i} product={product}/>
                    )}
                </div>
                }
                <div className='flex gap-2 text-2xl justify-center mt-auto'>
                    <div onClick={()=>changePage('start')} className={`w-12 hover:bg-[#FFB400] hover:text-white hover:border-[#FFB400] cursor-pointer  duration-150 aspect-square flex justify-center items-center border border-${pageCount>1? 'black cursor-pointer': 'gray-200 text-gray-500 cursor-not-allowed'}`}><MdKeyboardDoubleArrowLeft/></div>
                    <div onClick={()=>changePage('previous')} className={`w-12 hover:bg-[#FFB400] hover:text-white hover:border-[#FFB400] cursor-pointer  duration-150 aspect-square flex justify-center items-center border border-${pageCount>1? 'black cursor-pointer': 'gray-200 text-gray-500 cursor-not-allowed'}`}><MdKeyboardArrowLeft/></div>
                    <div className='w-12 hover:bg-[#FFB400] hover:text-white hover:border-[#FFB400] cursor-pointer  duration-150 aspect-square flex justify-center items-center border border-black text-lg font-bold py-1'>{pageCount}</div>
                    <div onClick={()=>changePage('next')} className={`w-12 hover:bg-[#FFB400] hover:text-white hover:border-[#FFB400] cursor-pointer  duration-150 aspect-square flex justify-center items-center border border-${pageCount<maxPages? 'black cursor-pointer': 'gray-200 text-gray-500 cursor-not-allowed'}`}><MdKeyboardArrowRight/></div>
                    <div onClick={()=>changePage('end')} className={`w-12 hover:bg-[#FFB400] hover:text-white hover:border-[#FFB400] cursor-pointer  duration-150 aspect-square flex justify-center items-center border border-${pageCount<maxPages? 'black  cursor-pointer': 'gray-200 text-gray-500 cursor-not-allowed'}`}><MdKeyboardDoubleArrowRight/></div>
                </div>
            </div>
            <div className="flex flex-col gap-10 w-90 shrink-0">
                <div className="p-10 shadow-lg">
                    <h1 className="text-xl font-bold">Product Categories</h1>
                    <div className="flex flex-col gap-4 mt-8">
                        <div onClick={()=>handleChangeCategory(null)} className="flex justify-between pb-2 cursor-pointer hover:text-amber-400 duration-200">
                            <p className="capitalize font-bold font-[Playfair]">All Categories</p>
                            <BsArrowRight/>
                        </div>
                        {categories?.slice(0,5).map((category, i)=>
                            <div key={i} onClick={()=>handleChangeCategory(category.slug)} className="flex justify-between pb-2 cursor-pointer hover:text-amber-400 duration-200">
                                <p className="capitalize font-bold font-[Playfair]">{category.name}</p>
                                <BsArrowRight/>
                            </div>
                        )}
                    </div>
                </div>
                <div className="p-10 w-full overflow-hidden shadow-lg">
                    <h1 className="text-xl font-bold mb-6">Search Products</h1>
                    <form onSubmit={searchSubmit} className='flex items-stretch'>
                        <input value={searchString} onChange={(e)=>setSearchString(e.currentTarget.value)} className="bg-gray-100 grow px-6" placeholder="Search..." type="search" />
                        <button type="submit" className='p-4 z-0 bg-[#FFB400] text-nowrap hover:bg-white hover:text-black border border-[#FFB400] hover:border-black duration-400 text-white text-lg font-bold shop_now cursor-pointer uppercase'><BiSearchAlt/></button>
                    </form>
                </div>
                <div className="p-10 w-full overflow-hidden shadow-lg">
                    <h1 className="text-xl font-bold mb-6">Filter By Price</h1>
                    <div className="flex justify-between mb-4 items-center">
                        <p>Your range:</p><p className="font-bold">${value[0]} - ${value[1]}</p>
                    </div>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={(value) => `$${value}`}
                        disableSwap
                        max={9999}
                        color="warning"  
                    />
                </div>
                <div className="w-full overflow-hidden shadow-lg">
                    <Link to='#'>
                        <img className="h-full" src="/src/assets/imgs/promo/13.jpg" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsPage