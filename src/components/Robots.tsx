import React from 'react'

function Robots() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-16">
      <img src="/efficiency-bots.png"  className="" alt="Hero Image" width="100%" height={600} />

    <div className='flex flex-row items-center justify-center'>
      <div className='py-2 px-6'>
        <h2 className='font-bold text-center text-5xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'>$3.8M</h2>
        <p className='text-center'>Market Cap</p>
      </div>
      <div className='p-2 px-6'>
        <h2 className='font-bold text-center text-5xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'>200,284+</h2>
        <p className='text-center'>Total minutes saved</p>
      </div>
      <div className='p-2 px-6'>
        <h2 className='font-bold text-center text-5xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'>100,231,440+</h2>
        <p className='text-center'>Lines of code analyzed</p>
      </div>
      <div className='p-2 px-6'>
        <h2 className='font-bold text-center text-5xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'>75%</h2>
        <p className='text-center'>Higher Satisfaction Rates Over Those Not Using MicroGPT</p>
      </div>
      <div className='p-2 px-6'>
        <h2 className='font-bold text-center text-5xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'>55%</h2>
        <p className='text-center'>More Efficient Than The Same Group</p>
      </div>

      </div>

    </div>
  )
}

export default Robots
