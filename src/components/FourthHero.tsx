import React from 'react'
import Image from 'next/image'

function FourthHero() {
  return (
    <div className='flex justify-center items-center p-16 flex-row gap-10 h-screen w-full'>
        <Image src="/optimal-efficiency.png" alt="Hero Image" width={220} height={300} />
        <div className='flex flex-col gap-4 items-start max-w-[420px] w-full'>
            <h2 className='grey-gradient-text font-bold text-left'>Instant Project Kickstart in Minutes</h2>
            <p>MicroGPT turns ideas into fully functional MVPs, in minutes, helping teams prototype faster than ever.</p>
        </div>
    </div>
  )
}

export default FourthHero
