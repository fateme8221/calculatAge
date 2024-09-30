import React from 'react'

function DayToBrithCom({dayToBrith}) {
  return (
  <div className="font-danaDemiBold flex flex-col gap-2.5 mt-6">

      <span className="text-blue-900 text-sm lg:text-lg">مانده تا تولد</span>

      <div className="font-danaDemiBold h-20 text-lg lg:text-3xl text-blue-900 flex items-center justify-center gap-2.5">
        
        <div className=" shadow-normal text-gray-800 text-base h-20 w-20 flex items-center justify-center bg-white rounded-lg ">
          {dayToBrith?.seconds}
        </div>

        <span className=" shadow-normal text-white text-xl">:</span>
      
        <div className=" shadow-normal text-gray-800 text-base h-20 w-20 flex items-center justify-center bg-white rounded-lg ">
          {dayToBrith?.minutes}
        </div>

        <span className=" shadow-normal text-white text-xl">:</span>

        <div className=" shadow-normal text-gray-800 text-base h-20 w-20 flex items-center justify-center bg-white rounded-lg ">
          {dayToBrith?.hours}
        </div>

        <span className=" shadow-normal text-white text-xl">:</span>

        <div className=" shadow-normal text-gray-800 text-base h-20 w-20 flex items-center justify-center bg-white rounded-lg ">
          {dayToBrith?.days}
        </div>

        <span className=" shadow-normal text-white text-xl">:</span>

        <div className=" shadow-normal text-gray-800 text-base h-20 w-20 flex items-center justify-center bg-white rounded-lg ">
          {dayToBrith?.months}
        </div>

        <span className=" shadow-normal text-white text-xl">:</span>

        <div className=" shadow-normal text-gray-800 text-base h-20 w-20 flex items-center justify-center bg-white rounded-lg ">
          {dayToBrith?.years}  
       </div>
    </div>
  </div>
  )
}

export default DayToBrithCom