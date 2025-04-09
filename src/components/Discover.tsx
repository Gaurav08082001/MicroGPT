import React from 'react'
import Image from 'next/image'

function Discover() {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full
    relative p-50 text-white overflow-hidden'>

       <Image src="/gift-box.png" className="absolute top-30 transform -translate-y-1/2 opacity-60 pointer-events-none animate-bounce"  style={{
                animation: 'slowBounce 3s ease-in-out infinite'}} alt="Hero Image" width={100} height={80} />

      <h2 className='text-5xl max-w-3xl text-center pb-5'>Introducing a pioneering ‘Code to Earn’ model that rewards your development efforts with $MICRO</h2>
      <button className='bg-white text-black font-bold rounded-xl p-3 cursor-pointer hover:bg-black hover:text-white'>Discover more</button>

      <style>{`
        @keyframes slowBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }
      `}</style>

    </div>
  )
}

export default Discover
