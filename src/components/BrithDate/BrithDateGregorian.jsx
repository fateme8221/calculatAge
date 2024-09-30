import React from 'react'

function BrithDategregorian({gregorian}) {
  return (
    <div className="text-gray-800 text-xs lg:text-base flex items-center justify-center gap-2.5">
            <span>{gregorian.day}</span>
            <span className='text-pink-700'>/</span>
            <span>{gregorian.month?.number}</span>
            <span className='text-pink-700'>/</span>
            <span>{new Date().getFullYear() + 1}</span>
          </div>
  )
}

export default BrithDategregorian