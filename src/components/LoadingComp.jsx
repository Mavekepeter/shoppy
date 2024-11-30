import React from 'react'

const LoadingComp = () => {
  return (
    <div className='flex items-center space-x-4'>
    <div className='bg-orange-500 rounded-full animate-bounce p-4'></div>
    <div>
        loading..
    </div>
    </div>
    
  )
}

export default LoadingComp