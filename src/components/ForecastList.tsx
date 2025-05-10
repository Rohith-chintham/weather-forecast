
import React from 'react';
import { DailyForecast } from '@/types/weather';
import ForecastItem from './ForecastItem';

interface ForecastListProps {
  forecasts: DailyForecast[];
}

const ForecastList: React.FC<ForecastListProps> = ({ forecasts }) => {
  return (
    <div className="grid grid-cols-5 gap-2 md:gap-4">
      {forecasts.map((forecast, index) => (
        <ForecastItem key={forecast.date} forecast={forecast} />
      ))}
    </div>
  );
};

export default ForecastList;
