
import React from 'react';
import { WeatherCondition } from '@/types/weather';
import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudSnow, Sun, CloudSun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WeatherIconProps {
  condition: WeatherCondition;
  className?: string;
  size?: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  condition, 
  className,
  size = 24
}) => {
  const getIcon = () => {
    switch (condition) {
      case 'clear':
        return <Sun size={size} className="text-sunny" />;
      case 'partly-cloudy':
        return <CloudSun size={size} className="text-cloudy" />;
      case 'cloudy':
        return <Cloud size={size} className="text-cloudy" />;
      case 'rain':
        return <CloudDrizzle size={size} className="text-rainy" />;
      case 'thunderstorm':
        return <CloudLightning size={size} className="text-stormy" />;
      case 'snow':
        return <CloudSnow size={size} className="text-snowy" />;
      case 'mist':
        return <CloudFog size={size} className="text-cloudy" />;
      default:
        return <Sun size={size} className="text-sunny" />;
    }
  };

  return (
    <div className={cn('inline-flex items-center justify-center', className)}>
      {getIcon()}
    </div>
  );
};

export default WeatherIcon;
