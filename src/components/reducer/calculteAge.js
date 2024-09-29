import moment from "moment";

import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

import { DateObject } from "react-multi-date-picker";

export const reducerHandel = (state, action) => {
    switch (action.type) {
      case 'CHANGE': {
        console.log(action.date)
        return {
          ...state,
          birthDay:new DateObject(action.date),
          gregorian: new DateObject(action.date).convert(gregorian, gregorian_fa),
         }
      }
      case 'CALCULATE_AGE': {
        let dateofbirth = moment(new Date(state.birthDay) );
        let todaysdate = moment(state.today);
        var diffDuration = moment.duration(todaysdate.diff(dateofbirth));
        return {
          ...state,
          dayToBrith:dayToBrithHandel(new Date(state.birthDay),state.today),
          userAge: {
            years: diffDuration.years(),
            months:diffDuration.months(),
            days:diffDuration.days(),
            hours:diffDuration.hours(),
            minutes:diffDuration.minutes(),
            seconds:diffDuration.seconds(),
          }
         }
      }
    }
}
const dayToBrithHandel = (birthDay,today) => {
    let dayToBrith = new Date(today.getFullYear(), birthDay.getMonth(), birthDay.getDate());
  
    today > dayToBrith && 
    dayToBrith.setFullYear(today.getFullYear() + 1);
    
    let differentsecend = dayToBrith.getTime() - today.getTime();
  
    const oneDay = 24 * 60 * 60 * 1000;
  
    const differentDays = Math.round(differentsecend / oneDay)
  
    return differentDays
}
  