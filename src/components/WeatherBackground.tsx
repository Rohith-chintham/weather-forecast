
import React from 'react';
import { WeatherCondition } from '@/types/weather';

interface WeatherBackgroundProps {
  condition: WeatherCondition;
  children: React.ReactNode;
}

const WeatherBackground: React.FC<WeatherBackgroundProps> = ({ condition, children }) => {
  const getBackgroundClass = () => {
    switch (condition) {
      case 'clear':
        return 'bg-clear-sky';
      case 'partly-cloudy':
        return 'bg-cloudy-sky';
      case 'cloudy':
        return 'bg-cloudy-sky';
      case 'rain':
      case 'thunderstorm':
        return 'bg-rainy-sky';
      case 'snow':
      case 'mist':
        return 'bg-cloudy-sky';
      default:
        return 'bg-clear-sky';
    }
  };

  return (
    <div className={`min-h-screen ${getBackgroundClass()} transition-all duration-1000`}>
      {children}
    </div>
  );
};

export default WeatherBackground;
