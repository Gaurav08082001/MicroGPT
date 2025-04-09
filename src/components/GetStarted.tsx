import React from 'react'
import Image from 'next/image'

function GetStarted() {
  return (
    <div className='flex flex-col items-center justify-center w-full
    relative mt-30 p-30 text-white overflow-hidden bg-[#281e2e]'>

      <Image src="/autobot-metal-1.png" className="absolute left-0 top-60 transform -translate-y-1/2 opacity-60 pointer-events-none animate-bounce"  style={{
                animation: 'slowBounce 3s ease-in-out infinite'}} alt="Hero Image" width={300} height={80} />
      <Image src="/autobot-metal-2.png" className="absolute right-0 top-95 transform -translate-y-1/2 opacity-60 pointer-events-none" style={{
                animation: 'slowBounce 3s ease-in-out infinite'}} alt="Hero Image" width={450} height={80} />
      
      <h2 className='font-bold text-4xl text-center max-w-2xl p-5'>Calling all autobots developers! microGPT to your rescue</h2>
      <p className='font-bold text-center p-5'>TO ELEVATE YOUR CODING EXPERIENCE</p>
      <button className='px-6 py-2 font-bold rounded-2xl border bg-purple-800 cursor-pointer hover:bg-purple-500 hover:w-40'>Get Started</button>

      <style>{`
        @keyframes slowBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-40px);
          }
        }
      `}</style>

    </div>
  )
}

export default GetStarted
