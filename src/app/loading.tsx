import FlipText from '@/lib/animations/flip-animation'
import React from 'react'

const Loading = () => {
  return (
    <div className='fixed h-screen w-full top-0 right-0 bottom-0 left-0 z-[1000] bg-[#f8f8f8]'>
         <div className='flex items-center justify-center h-full'>
          <h1 className='text-[6rem]'>
            <FlipText>Zuvora™</FlipText>
          </h1>
         </div>
    </div>
  )
}

export default Loading