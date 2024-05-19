import React, { useEffect, useState } from "react";
import WeatherCard from "../../components/weather-card";
import {
  getDateByDayNameAndWeekNumber,
  getFormattedDate,
  getWeatherData,
} from "../../utils/helper";

const WeatherForecast = ({ queryInfo }) => {
  const [currentWeather, setCurrentWeather] = useState();
  const [nextWeather, setNextWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [dataFetchError, setDataFetchError] = useState(false);

  const currentDate = queryInfo?.dayName
    ? getDateByDayNameAndWeekNumber(queryInfo?.dayName, 1)
    : undefined;
  const nextDate = queryInfo?.dayName
    ? getDateByDayNameAndWeekNumber(queryInfo?.dayName, 2)
    : undefined;

  useEffect(() => {
    async function fetchData() {
      if (queryInfo?.dayName && queryInfo?.location && queryInfo?.dayTime) {
        const { location, dayName } = queryInfo;
        const currentDate = getDateByDayNameAndWeekNumber(dayName, 1);
        const nextDate = getDateByDayNameAndWeekNumber(dayName, 2);
        setIsLoading(true);
        try {
          const currentWeather = await getWeatherData(
            getFormattedDate(currentDate),
            location
          );
          setCurrentWeather(currentWeather);
          const nextWeather = await getWeatherData(
            getFormattedDate(nextDate),
            location
          );
          setNextWeather(nextWeather);
          setIsLoading(false);
          setDataFetchError(false);
        } catch (error) {
          setDataFetchError(true);
        }
      }
    }
    fetchData();
  }, [queryInfo]);

  if (!queryInfo?.location || !queryInfo?.dayName || !queryInfo?.dayTime) {
    return <div className="m-8 text-gray-400">Enter the values</div>;
  }

  if (dataFetchError) {
    return (
      <div className="m-8 text-red-400 opacity-80 text-sm">
        Can't Fetch weather information. Try again. Check the location if it is
        right.
      </div>
    );
  }

  if (isLoading) {
    return <span className="loading loading-bars loading-lg m-8 mt-20"></span>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <WeatherCard
        dayName={queryInfo?.dayName}
        weatherInfo={currentWeather}
        date={currentDate}
        time={queryInfo?.dayTime}
      />
      <WeatherCard
        dayName={queryInfo?.dayName}
        weatherInfo={nextWeather}
        date={nextDate}
        isNextDateCard={true}
        time={queryInfo?.dayTime}
      />
    </div>
  );
};

export default WeatherForecast;
