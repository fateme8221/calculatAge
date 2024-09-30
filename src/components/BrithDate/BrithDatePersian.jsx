import React from 'react'

function BrithDatePersian({birthDay}) {
  return (
     <div className="text-gray-800 text-xs lg:text-base flex  items-center justify-center gap-2.5">
        <span>{birthDay.day}</span>
        <span className='text-pink-700'>/</span>
        <span>{birthDay.month?.number}</span>
        <span className='text-pink-700'>/</span>
        <span>{birthDay.year}</span>
     </div>
  )
}

export default BrithDatePersian