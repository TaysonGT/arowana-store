const Third = () => {
  return (
    <section className='flex w-full grow items-center justify-center basis-0 bg-[#F2F6F7]'>
        <div className='w-[80%] mx-auto flex gap-4'>

          <div className='flex-1 flex flex-col justify-center items-start gap-2 p-4 py-40 bg-[url(/src/assets/imgs/3rd-left.png)] bg-cover'>
            <p className='text-2xl font-bold uppercase'>Grow It</p>
            <h1 className='text-5xl font-bold leading-15 mb-4'>Just <br/> Starting?</h1>
            <button className='px-8 py-3 z-0 bg-[#FFB400] hover:bg-transparent hover:text-black border border-[#FFB400] hover:border-black duration-400 text-white text-lg font-bold shop_now cursor-pointer uppercase'>try a growth kit</button>
            
          </div>
          <div className='flex-1 flex flex-col justify-center items-end text-right gap-2 p-4 py-40 bg-[url(/src/assets/imgs/3rd-right.png)] bg-cover'>
            <p className='text-2xl font-bold uppercase'>Groom It</p>
            <h1 className='text-5xl font-bold mb-4'>Luscious <br/>Beard?</h1>            
            <button className='px-8 py-3 z-0 bg-[#FFB400] hover:bg-transparent hover:text-black border border-[#FFB400] hover:border-black duration-400 text-white text-lg font-bold shop_now cursor-pointer uppercase'>try a growth kit</button>
          </div>
        </div>
    </section>
  )
}

export default Third