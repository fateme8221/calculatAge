import React from 'react'
import { DateObject } from 'react-multi-date-picker'

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"


function BrithDatePersian({ birthDay }) {

  return (
     <div className="text-gray-800 text-xs lg:text-base flex  items-center justify-center gap-2.5">
        <span>{birthDay.day}</span>
        <span className='text-pink-700'>/</span>
        <span>{birthDay.month?.number}</span>
        <span className='text-pink-700'>/</span>
        <span>{new DateObject({ calendar: persian, locale: persian_fa }).year + 1}</span>
     </div>
  )
}

export default BrithDatePersian