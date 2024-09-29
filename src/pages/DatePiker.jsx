import React, {useReducer, useEffect, useTransition, useState } from "react";
import DatePicker from "react-multi-date-picker";

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

import { reducerHandel } from "../components/reducer/calculteAge";

let weekday =['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday']

export default function DatePikerComponent() {
  const [isshow ,setIsShow] = useState(false)
  const [state, dispatch] = useReducer(reducerHandel, {
    today: new Date(),
    birthDay:'',
    gregorian: "",
    dayToBrith: 0,
    userAge: {
      years: 0,
      months:0,
      days:0,
      hours:0,
      minutes:0,
      seconds:0,
    },
})
  useEffect(() => { 
    console.log(state);
  },
    [state]
  )
 
  
  return (
    <div className="container">
      <div data-aos="flip-left" className="bg-white shadow-normal rounded-2xl p-14  mt-32 w-[50rem] ">
        <h1 className="font-danaDemiBold text-2xl text-gray-800 mb-8">محاسبه سن و تاریخ تولد</h1>
        <div className=" flex flex-col items-center justify-center gap-5">
           <DatePicker
           inputClass="bg-gray-100 text-gray-800 w-56 h-12 border-none rounded-2xl p-4"
           value={state.date}
           calendar={persian}
           locale={persian_fa}
           calendarPosition="bottom-center"
           onChange={(date)=>dispatch({type: 'CHANGE',date} )}
          />
          <button data-hs-overlay="#hs-scale-animation-modal"
            className=" item-center font-danaDemiBold text-xs  lg:text-base bg-gradient-to-r text-white from-blue-600 to-blue-700 hover:bg-blue-800 w-56 h-12 rounded-2xl" 
            onClick={() => {
              setIsShow(true)
              return dispatch({type: 'CALCULATE_AGE'})
            }}
          >محاسبه کن </button>
        </div> 
      
      </div >

      <div  dir="rtl" className={`w-[50rem] bg-gray-100 p-14 shadow-normal rounded-2xl transition-opacity
         ${!isshow ? 'opacity-0' : 'opacity-100'}`}>
        <div className="font-danaDemiBold text-3xl text-blue-900 flex items-center justify-center gap-2.5">
          <span> {state.userAge.years} سال</span>
           <span> {state.userAge.months} ماه</span>
           <span> {state.userAge.days} روز</span>
           <span> {state.userAge.hours} ساعت</span>
           <span> {state.userAge.minutes} دقیقه</span>
           <span> {state.userAge.seconds} ثانیه</span>
        </div>
        <div className="font-danaDemiBold flex flex-col gap-2.5 mt-6">
          <span className="text-blue-900 text-lg">تاریخ تولد </span>
          <div className="text-gray-800 flex  items-center justify-center gap-2.5">
           <span>{state.birthDay.year}</span>
           <span>{state.birthDay.month?.name}</span>
           <span>{state.birthDay.month?.number}</span>
           <span>{state.birthDay.weekDay?.name}</span>
          </div>
          <div className="text-gray-800 flex items-center justify-center gap-2.5">
           <span>{state.gregorian.year}</span>
           <span>{state.gregorian.month?.name}</span>
           <span>{state.gregorian.month?.number}</span>
           <span>{weekday[state.gregorian.weekDay?.number]}</span>
          </div>
        </div>
        <div>
          <div className="font-danaDemiBold flex flex-col gap-2.5 mt-6">
            <span className="text-blue-900 text-lg">مانده تا تولد</span>
            <span className="text-gray-800">{state.dayToBrith}</span>
          </div>
      </div>
      </div>
    </div>
 
  )
}