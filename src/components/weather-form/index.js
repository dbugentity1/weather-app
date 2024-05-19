import React, { useEffect, useState } from "react";
import Select from "react-select";

import { daytimeOptions, dayNameOptions, customSelectStyles } from "./utils";
import useDebounce from "../../hooks/debounce-hooks";
import { LocationIcon } from "../../assets/icons";

const WeatherForm = ({ setQueryInfo }) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onWeekdayChange = (option) => {
    setQueryInfo((queryInfo) => ({
      ...queryInfo,
      dayName: option?.value,
    }));
  };

  const onDayTimeChange = (option) => {
    setQueryInfo((queryInfo) => ({
      ...queryInfo,
      dayTime: option?.value,
    }));
  };

  useEffect(() => {
    if (debouncedValue !== undefined) {
      setQueryInfo((queryInfo) => ({
        ...queryInfo,
        location: debouncedValue,
      }));
    }
  }, [debouncedValue, setQueryInfo]);

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center  justify-between pb-2 mb-8 md:mb-3 border-b-2 border-gray-600">
      <div className="flex gap-1 items-center">
        <LocationIcon />
        <input
          type="text"
          placeholder="Enter Location"
          className="py-2 pl-4 max-w-72 md:w-full md:max-w-xs text-lg font-bold focus:!border-none focus:!outline-none"
          onChange={onInputChange}
        />
      </div>
      <div className="w-fit flex gap-3">
        <Select
          className="!w-40 md:!w-48 text-xs"
          options={dayNameOptions}
          placeholder="Day"
          name="weekdays"
          onChange={onWeekdayChange}
          styles={customSelectStyles}
        />
        <Select
          className="!w-40 md:!w-48 text-xs"
          options={daytimeOptions}
          placeholder="Time"
          name="daytime"
          onChange={onDayTimeChange}
          styles={customSelectStyles}
        />
      </div>
    </div>
  );
};

export default WeatherForm;
