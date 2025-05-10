
import React from 'react';
import { Card } from '@/components/ui/card';
import { CurrentWeather } from '@/types/weather';
import WeatherIcon from './WeatherIcon';

interface CurrentWeatherCardProps {
  weather: CurrentWeather;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({ weather }) => {
  // Helper function to get the condition text
  const getConditionText = (condition: string): string => {
    return condition
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <Card className="glass-card p-6 md:p-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
            {weather.location}
          </h2>
          <p className="text-white text-opacity-80 mb-4">
            Last updated: {new Date(weather.lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
        
        <div className="flex items-center justify-center md:justify-end">
          <WeatherIcon condition={weather.condition} size={64} className="animate-float" />
          <div className="ml-4 text-center">
            <div className="text-5xl md:text-6xl font-bold text-white">
              {weather.temperature}°
            </div>
            <div className="text-white text-opacity-80">
              {getConditionText(weather.condition)}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeatherCard;
