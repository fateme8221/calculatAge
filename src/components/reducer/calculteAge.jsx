import moment from "moment";

import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";

import { DateObject } from "react-multi-date-picker";

export const reducerHandel = (state, action) => {
  switch (action.type) {
 
      case 'CHANGE': {
        let validt = (action.date == null) ? false : true  
        return {
          ...state,
          isvalid:validt,
          birthDay:new DateObject(action.date),
          gregorian: new DateObject(action.date).convert(gregorian, gregorian_fa),
         }
      }
      case 'CALCULATE_AGE': {  
        let today  = new Date();
        let birthDay = new Date(state.birthDay); 
        let diffrent = moment(today,"DD/MM/YYYY HH:mm:ss").add(1, 'days').diff(moment(birthDay,"DD/MM/YYYY HH:mm:ss").startOf('day'));
        let date = moment.duration(diffrent); 
        return {
          ...state,
          userAge: {
            years: date.years(),
            months: date.months(),
            days: date.days(),
            hours: date.hours(),
            minutes: date.minutes(),
            seconds: date.seconds(),
          }
        }
      }
        case 'DAYTOBRITH' : {
          let today = new Date(new Date().getTime() + (3_600_000 *24))
          let birthDay= new Date(state.birthDay)
          let dayToBrith = new Date(today.getFullYear(), birthDay.getMonth() , birthDay.getDate());
          
          
          today > dayToBrith &&  
          dayToBrith.setFullYear(today.getFullYear() + 1);
          today == dayToBrith  &&  
          dayToBrith.setFullYear(today.getFullYear() + 1);
      
          let date = dayToBrith - today;

          let seconds = moment.duration(date).seconds() ||0;
          let minutes = moment.duration(date).minutes() ||0;
          let hours = moment.duration(date).hours() || 0;
          let days = moment.duration(date).days() || 0;
          let months = moment.duration(date).months() || 0;
          let years = moment.duration(date).years() || 0;
          return {
          ...state,
            dayToBrith: { seconds, minutes, hours, days, months, years }
        }
      }
    }
}
  