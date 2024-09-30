import React from 'react'

function DatePassCom({userAge}) {
  return (
    <div className="font-danaDemiBold text-lg lg:text-3xl text-blue-900 flex items-center justify-center gap-2.5">
          <span> {userAge.years} سال</span>
           <span> {userAge.months} ماه</span>
           <span> {userAge.days} روز</span>
           <span> {userAge.hours} ساعت</span>
           <span> {userAge.minutes} دقیقه</span>
           <span> {userAge.seconds} ثانیه</span>
    </div>
  )
}

export default DatePassCom