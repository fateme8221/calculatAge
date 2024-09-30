import moment from "moment";

import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";

import { DateObject } from "react-multi-date-picker";

export const reducerHandel = (state, action) => {
    switch (action.type) {
      case 'CHANGE': {
        return {
          ...state,
          isValid: true,
          birthDay:new DateObject(action.date),
          gregorian: new DateObject(action.date).convert(gregorian, gregorian_fa),
         }
      }
      case 'CALCULATE_AGE': {
        let dateofbirth = moment(new Date(state.birthDay));
        let todaysdate = moment(state.today);
        var diffDuration = moment.duration(todaysdate.diff(dateofbirth));
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
          
          var time = dayToBrith - today;

          var seconds = moment.duration(time).seconds() ||0;
          var minutes = moment.duration(time).minutes() ||0;
          var hours = moment.duration(time).hours() || 0;
          var days = moment.duration(time).days() || 0;
          var months = moment.duration(time).months() || 0;
          var years = moment.duration(time).years() || 0;
          return {
          ...state,
            dayToBrith: { seconds, minutes, hours, days, months, years }
        }
      }
    }
}
  