import moment from "moment";

import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";

import { DateObject } from "react-multi-date-picker";

export const reducerHandel = (state, action) => {
  switch (action.type) {
 
      case 'CHANGE': {
        let validt = (action.date == null) ? false : true
        console.log(validt)
        console.log(action.date)   
        return {
          ...state,
          isvalid:validt,
          birthDay:new DateObject(action.date),
          gregorian: new DateObject(action.date).convert(gregorian, gregorian_fa),
         }
      }
      case 'CALCULATE_AGE': {
        let dateofbirth = moment(new Date(state.birthDay));
        let todaysdate = moment(new Date());
        let diffDuration = moment.duration(todaysdate.diff(dateofbirth));
        return {
          ...state,
          userAge: {
            years: diffDuration.years(),
            months: diffDuration.months(),
            days: diffDuration.days(),
            hours: diffDuration.hours(),
            minutes: diffDuration.minutes(),
            seconds: diffDuration.seconds(),
          }
        }
      }
        case 'DAYTOBRITH' : {
        let today = new Date()
        let birthDay= new Date(state.birthDay)
          let dayToBrith = new Date(today.getFullYear(), birthDay.getMonth(), birthDay.getDate());
        
          today > dayToBrith &&  
          dayToBrith.setFullYear(today.getFullYear() + 1);
          
          let time = dayToBrith - today;

          let seconds = moment.duration(time).seconds() ||0;
          let minutes = moment.duration(time).minutes() ||0;
          let hours = moment.duration(time).hours() || 0;
          let days = moment.duration(time).days() || 0;
          let months = moment.duration(time).months() || 0;
          let years = moment.duration(time).years() || 0;
          return {
          ...state,
            dayToBrith: { seconds, minutes, hours, days, months, years }
        }
      }
    }
}
  