import { useState } from 'react';
import { ErrorBoundary } from "react-error-boundary";

import Header from './components/header';
import WeatherForm from './features/weather-form';
import WeatherForecast from './features/weather-forecast';

function App() {
  const [queryInfo, setQueryInfo] = useState();

  return (
    <div className='flex flex-col items-center mb-6 px-4 sm:px-6 md:px-10'>
      <ErrorBoundary fallback={<div>Something went wrong. Try again!</div>}>
        <Header />
        <WeatherForm setQueryInfo={setQueryInfo}/>
        <WeatherForecast queryInfo={queryInfo} /> 
      </ErrorBoundary>
    </div>
  );
}

export default App;
