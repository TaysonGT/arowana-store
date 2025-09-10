const Subscription = () => {
  return (
    <section className='flex flex-col gap-6 w-full items-center justify-center bg-[url(/src/assets/imgs/8.jpg)] bg-cover py-20 text-center'>
        <h1 className='font-bold text-3xl'>We make your inbox better</h1>
        <p className="font-[Playfair] leading-6">Sign up to our newsletter to receive grooming tips, style inspiration, <br/> exclusive access to pre-launch product pricing and more.</p>
        <div className='flex w-[50%] items-stretch'>
            <input className="bg-white grow px-6" placeholder="Email" type="text" />
            <button className='px-8 py-3 z-0 bg-[#FFB400] text-nowrap hover:bg-white hover:text-black border border-[#FFB400] hover:border-black duration-400 text-white text-lg font-bold ltr cursor-pointer uppercase'>Subscribe</button>
        </div>
    </section>
  )
}

export default Subscription