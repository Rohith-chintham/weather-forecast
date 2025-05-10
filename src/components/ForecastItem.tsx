
import React from 'react';
import { DailyForecast } from '@/types/weather';
import WeatherIcon from './WeatherIcon';
import { Card } from '@/components/ui/card';

interface ForecastItemProps {
  forecast: DailyForecast;
}

const ForecastItem: React.FC<ForecastItemProps> = ({ forecast }) => {
  return (
    <Card className="glass-card p-3 flex flex-col items-center">
      <div className="font-medium">{forecast.dayOfWeek}</div>
      <WeatherIcon condition={forecast.condition} size={36} className="my-2" />
      <div className="flex gap-2 items-center">
        <span className="font-bold">{forecast.temperature.max}°</span>
        <span className="text-gray-400">{forecast.temperature.min}°</span>
      </div>
      <div className="text-xs mt-1">{forecast.precipitation}% precip</div>
    </Card>
  );
};

export default ForecastItem;
