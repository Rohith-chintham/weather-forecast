
import React from 'react';
import { Card } from '@/components/ui/card';
import { CurrentWeather } from '@/types/weather';
import { Droplets, Wind, Thermometer, Sun, Eye } from 'lucide-react';

interface WeatherDetailsProps {
  weather: CurrentWeather;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weather }) => {
  const detailItems = [
    {
      label: 'Feels Like',
      value: `${weather.feelsLike}°`,
      icon: <Thermometer size={18} className="text-red-400" />,
    },
    {
      label: 'Humidity',
      value: `${weather.humidity}%`,
      icon: <Droplets size={18} className="text-blue-400" />,
    },
    {
      label: 'Wind',
      value: `${weather.wind.speed} mph`,
      icon: <Wind size={18} className="text-gray-400" />,
    },
    {
      label: 'UV Index',
      value: weather.uvIndex,
      icon: <Sun size={18} className="text-yellow-400" />,
    },
    {
      label: 'Visibility',
      value: `${weather.visibility} mi`,
      icon: <Eye size={18} className="text-purple-400" />,
    },
  ];

  return (
    <Card className="glass-card p-4">
      <h3 className="font-medium mb-2 text-left">Weather Details</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {detailItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <div className="font-medium">{item.value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WeatherDetails;
