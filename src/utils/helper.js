import { CloudyIcon, RainIcon, SunnyIcon } from "../assets/icons";

export function getDateByDayNameAndWeekNumber(dayName, weekNumber) {
  // Array of weekday names to convert the dayName to a number
  const weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  // Get the current date
  const today = new Date();
  // Get the current day of the week as a number (0-6)
  const currentDay = today.getDay();
  // Get the target day as a number (0-6)
  const targetDay = weekdays.indexOf(dayName.toLowerCase());

  if (targetDay === -1) {
    throw new Error("Invalid day name");
  }

  // Calculate the difference in days to the target day
  let dayDifference = targetDay - currentDay;
  if (dayDifference < 0) {
    dayDifference += 7;
  }

  // Calculate the date of the target day in the target week
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + dayDifference + (weekNumber - 1) * 7);

  // Adjust calculation for negative week numbers
  if (weekNumber < 0) {
    const weeksToSubtract = Math.abs(weekNumber);
    targetDate.setDate(today.getDate() + dayDifference - weeksToSubtract * 7);
  }

  return targetDate;
}

export async function getWeatherData(date, location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=K6HB9XX4DDRSRGFM6BP2HFQAJ&contentType=json`
  );
  const data = await response.json();
  return data;
}

export const getFormattedDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`;
};


export const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(':');
    const hourInt = parseInt(hour, 10);
    const period = hourInt >= 12 ? 'PM' : 'AM';
    const hour12 = hourInt % 12 || 12; // Convert to 12-hour format
    return `${hour12}:${minute} ${period}`;
  };


  export const getWeatherConditionIcon = (condition) => {
    switch(condition){
      case "cloudy" : 
      case "partly-cloudy-day":
        return <CloudyIcon height='80px' width='80px' />;
      case "rain": 
        return <RainIcon height='80px' width='80px' />;
      case "sunny": 
      case "partly-sunny-day":
        return <SunnyIcon height='80px' width='100px' />;
      default:
        return <SunnyIcon height='100px' width='100px' />;
    }
  }