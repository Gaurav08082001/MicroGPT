import React from 'react'

function Buttons() {
  return (
    <div className='flex flex-row items-center justify-center w-full'>
      <button className='px-6 py-2 m-3 text-center justify-center font-bold rounded-3xl border border-white cursor-pointer hover:bg-purple-500'>X.com</button>
      <button className='px-6 py-2 m-3 text-center justify-center font-bold rounded-3xl border border-white cursor-pointer  hover:bg-purple-500'>Telegram</button>
      <button className='px-6 py-2 m-3 text-center justify-center font-bold rounded-3xl border border-white cursor-pointer  hover:bg-purple-500'>Dextools</button>
      <button className='px-6 py-2 m-3 text-center justify-center font-bold rounded-3xl border border-white cursor-pointer  hover:bg-purple-500'>White Paper</button>
      <button className='px-6 py-2 m-3 text-center justify-center font-bold rounded-3xl border border-white cursor-pointer  hover:bg-purple-500'>Pitch Deck</button>
    </div>
  )
}

export default Buttons
