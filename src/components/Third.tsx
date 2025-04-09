import React from 'react'

function Third() {
  return (
    <div className='flex flex-row items-center justify-center h-screen w-full'>
      
        <div className='p-10'>
            <p className='text-center justify-center font-bold text-xl'>Incubated By</p>
            <button className='p-2  text-center justify-center font-bold text-2xl cursor-pointer'>Seedify</button>
        </div>
        <div className='p-10'>
            <p className='text-center justify-center font-bold text-xl'>Launchpads</p>
            <button className='p-2  text-center justify-center font-bold text-2xl cursor-pointer'>Seedify</button>
            <button className='p-2  text-center justify-center font-bold text-2xl cursor-pointer'>Ape Terminal</button>
        </div>
        <div className='p-10'>
            <p className='text-center justify-center font-bold text-xl'>Exchanges</p>
            <button className='p-2  text-center justify-center font-bold text-2xl cursor-pointer'>Gate.io</button>
            <button className='p-2  text-center justify-center font-bold text-2xl cursor-pointer'>MEXC Global</button>
        </div>

    </div>
  )
}

export default Third
