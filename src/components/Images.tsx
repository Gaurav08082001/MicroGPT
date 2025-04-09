import React from 'react'
import Image from 'next/image'

function Images() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Image src="/code.png"  className="transition-transform duration-500 hover:scale-110" alt="Hero Image" width={800} height={500} />
      {/* <p className="text-white text-6xl text-center font-bold p-5">
        Welcome to MicroGPT
      </p> */}
    </div>
  )
}

export default Images
