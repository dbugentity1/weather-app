import React from "react";

import { RainIcon2, WindIcon } from "../../assets/icons";
import WeatherChart from "../weather-chart";
import { getWeatherConditionIcon } from "../../utils/helper";

const WeatherCard = ({
  dayName,
  date,
  weatherInfo,
  isNextDateCard = false,
}) => {
  return (
    <div className="flex flex-col items-center w-80">
      <p className="text-red-700 font-semibold my-4 text-lg">
        {isNextDateCard ? "Next" : "This"}{" "}
        <span className="italic text-cyan-500">{dayName}</span> the{" "}
        <span className="italic text-cyan-500">{date?.getDate()}th</span>
      </p>
      <div className="flex gap-6 items-center ">
        {getWeatherConditionIcon(weatherInfo?.days?.[0]?.icon)}
        <div className="flex flex-col space-y-1">
          <span className="w-full text-md italic pl-1 mb-2">
            {weatherInfo?.days?.[0]?.conditions}, {weatherInfo?.days?.[0]?.temp}
            F
          </span>
          <span className="flex gap-2 items-center">
            <WindIcon height="20px" />
            <span className="text-sm">
              <span className="font-bold text-sm">Winds: </span>
              {weatherInfo?.days?.[0]?.windspeed}mph
            </span>
          </span>
          <span className="flex gap-2 items-center ">
            <RainIcon2 height="20px" />
            <span className="text-sm">
              {" "}
              <span className="font-bold">Rain: </span>
              {weatherInfo?.days?.[0]?.cloudcover}%
            </span>
          </span>
        </div>
      </div>
      <div className="w-full h-full mt-10">
        <WeatherChart weatherInfo={weatherInfo} />
      </div>
    </div>
  );
};

export default WeatherCard;
