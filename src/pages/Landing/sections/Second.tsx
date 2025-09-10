import BeardOil from '/src/assets/imgs/6.png'

const Second = () => {
  return (
    <section className='flex py-30 w-full grow items-center justify-center basis-0'>
        <div className='w-[80%] mx-auto flex gap-8'>

          <div className='flex-1 flex flex-col justify-center items-start gap-8 p-4'>
            <p className='text-2xl font-bold'>Provide the best</p>
            <h1 className='text-5xl font-bold'>Beard Oil For You</h1>
            <p className='text-wrap text-xl font-[Playfair]'>We provide the best Beard oil all over the world. We are the worldd best store for Beard Oil. You can buy our product without any hegitation because we always consus about our product quality and always maintain it properly so your can trust and this is our main goal we belive that...</p>
            <p className='text-wrap text-xl font-[Playfair]'>Some of our customer say’s that they trust us and buy our product without any hagitation because they belive us and always happy</p>
            <button className='px-8 py-3 bg-transparent border-1 cursor-pointer border-black text-lg hover:text-white hover:border-[#FFB400] hover:bg-[#FFB400] duration-400 font-bold view_more relative overflow-hidden'>VIEW MORE</button>
          </div>
          <div className='flex-1 pl-6'>
            <img src={BeardOil} alt="" />
          </div>
        </div>
    </section>
  )
}

export default Second