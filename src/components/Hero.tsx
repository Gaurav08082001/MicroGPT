import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <section className='relative w-full h-[100%] p-50 text-white overflow-hidden flex flex-col items-center justify-center'>
      <Image src="/hero-bg-1.png" className="absolute left-0 top-100 transform -translate-y-1/2 opacity-60 pointer-events-none animate-bounce"  style={{
          animation: 'slowBounce 3s ease-in-out infinite'}} alt="Hero Image" width={350} height={80} />
      <Image src="/hero-bg-2.png" className="absolute right-0 top-120 transform -translate-y-1/2 opacity-60 pointer-events-none" alt="Hero Image" width={350} height={80} />
      <p className="text-white text-6xl text-center max-w-4xl font-bold p-5">
        MicroGPT: Grammarly for code, saving time with a new
      </p>    
      <p className="text-6xl text-center max-w-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text p-5">
        AI AGENT
      </p>   
      <p className="text-xl text-center text-white max-w-xl font-bold p-5">
        Streamlining coding by automating code generation, optimization, bug detection, and reviews to save time and resources
      </p>

      <div className="flex flex-row space-x-4">
        <button className="px-6 py-2 font-bold rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 cursor-pointer hover:bg-purple-200">
          Get Started
        </button>
        <button className="px-6 py-2 font-bold rounded-2xl border border-purple-500 cursor-pointer hover:bg-purple-500">
          Buy $MICRO
        </button>
        <button className="px-6 py-2 font-bold rounded-2xl border border-purple-500 cursor-pointer hover:bg-purple-500">
          Stake
        </button>
      </div>

      <div className='flex flex-row items-center justify-center w-full pt-18'>
      <button className='px-6 py-2 m-3 text-center justify-center font-bold rounded-3xl border border-white cursor-pointer hover:bg-purple-500'>X.com</button>
      <button className='px-6 py-2 m-3 text-center justify-center font-bold rounded-3xl border border-white cursor-pointer  hover:bg-purple-500'>Telegram</button>
      <button className='px-6 py-2 m-3 text-center justify-center font-bold rounded-3xl border border-white cursor-pointer  hover:bg-purple-500'>Dextools</button>
      <button className='px-6 py-2 m-3 text-center justify-center font-bold rounded-3xl border border-white cursor-pointer  hover:bg-purple-500'>White Paper</button>
      <button className='px-6 py-2 m-3 text-center justify-center font-bold rounded-3xl border border-white cursor-pointer  hover:bg-purple-500'>Pitch Deck</button>
    </div>

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

    </section>
  );
}

export default Hero;

