import React, {useReducer, useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

import { reducerHandel } from "../components/reducer/calculteAge";
import DayToBrithCom from "../components/DayToBrithCom/DayToBrithCom";

import BrithDatePersian from "../components/BrithDate/BrithDatePersian";
import BrithDategregorian from "../components/BrithDate/BrithDategregorian";
import DatePassCom from "../components/DatePassCom/DatePassCom";

export default function DatePikerComponent() {
  const [isshow ,setIsShow] = useState(false)
  const [state, dispatch] = useReducer(reducerHandel, {
    isValid:false,
    today: new Date(),
    birthDay:'',
    gregorian: '',
    dayToBrith: '',
    userAge: {
      years: 0,
      months:0,
      days:0,
      hours:0,
      minutes:0,
      seconds:0,
    },
})
  
  setInterval(() => {
    dispatch({ type: 'DAYTOBRITH' })
    dispatch({type: 'CALCULATE_AGE'})
  }, 1000);
 
  
  return (
    <div className="container ">
      <div data-aos="flip-left" className="bg-white shadow-normal rounded-2xl p-14  mt-32 w-80 md:w-[45rem] lg:w-[50rem] ">
        <h1 data-aos="zoom-in" className="font-danaDemiBold text-lg lg:text-2xl text-gray-800 mb-8">محاسبه سن و تاریخ تولد</h1>
        <div className=" flex flex-col  items-center justify-center gap-5">
          <DatePicker
            mapDays={({ date }) => {
              let props = {}
              let isWeekend = date.weekDay.index === 6
              
              if (isWeekend) props.className = "highlight highlight-red"
              
              return props
            }} 
           editable='false'
           minDate={new DateObject({ calendar: persian }).set("year",1300)}
           maxDate={new DateObject({ calendar: persian }).set("date", (state.today - 86_400_000))}
           inputClass="bg-gray-100 text-gray-800 w-52 md:w-72 h-12 border-none rounded-2xl p-4 transition"
           value={state.date}
           calendar={persian}
           locale={persian_fa}
           calendarPosition="bottom-center"
            onChange={(date, { input, isTyping }) => {
              console.log(state);
              setIsShow(false)
              dispatch({ type: 'CHANGE', date })
          }}
           />
          <button
            disabled={!state.isvalid}
            className=" item-center font-danaDemiBold text-sm lg:text-base bg-gradient-to-r text-white from-blue-500 to-blue-700 hover:bg-blue-800 hover:-translate-y-1 w-52 md:w-72 h-12 rounded-2xl transition-all duration-300" 
            onClick={() => {
              setIsShow(true)
              return dispatch({type: 'CALCULATE_AGE'})
            }}
          >محاسبه کن </button>
        </div> 
      
      </div >

      <div  dir="rtl" className={`w-80 md:w-[45rem] lg:w-[50rem] bg-gray-100 p-14 shadow-normal rounded-2xl    transition-all duration-500 
         ${!isshow ? 'hidden ' : 'block'}`}>
        <DatePassCom userAge={state.userAge}/>
        <div className="font-danaDemiBold flex flex-col gap-2.5 mt-6">
          <span className="text-blue-900 text-sm lg:text-lg">تاریخ تولد </span>
          <BrithDatePersian birthDay={state.birthDay} />
          <BrithDategregorian gregorian={state.gregorian}/>
        </div>
        <div>
          <DayToBrithCom dayToBrith={state.dayToBrith} />
        </div>
      </div>
    </div>
 
  )
}