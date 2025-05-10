
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchWeatherData } from '@/services/weatherApi';
import { WeatherData } from '@/types/weather';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/components/ui/sonner';
import WeatherBackground from '@/components/WeatherBackground';
import CurrentWeatherCard from '@/components/CurrentWeatherCard';
import ForecastList from '@/components/ForecastList';
import WeatherDetails from '@/components/WeatherDetails';
import LocationSearch from '@/components/LocationSearch';

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('New York');

  const { data: weatherData, isLoading, error, refetch } = useQuery({
    queryKey: ['weather', selectedLocation],
    queryFn: () => fetchWeatherData(selectedLocation),
  });

  useEffect(() => {
    if (error) {
      toast.error('Failed to load weather data. Please try again.');
      console.error('Error fetching weather data:', error);
    }
  }, [error]);

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    toast.info(`Loading weather for ${location}...`);
  };

  return (
    <WeatherBackground condition={weatherData?.current.condition || 'clear'}>
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Header with search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">Weather Forecast</h1>
            <LocationSearch onLocationSelect={handleLocationChange} />
          </div>
          
          {/* Current weather */}
          {isLoading ? (
            <Skeleton className="h-40 w-full bg-white bg-opacity-10 animate-pulse" />
          ) : weatherData ? (
            <CurrentWeatherCard weather={weatherData.current} />
          ) : null}
          
          {/* Weather details */}
          {isLoading ? (
            <Skeleton className="h-24 w-full bg-white bg-opacity-10 animate-pulse" />
          ) : weatherData ? (
            <WeatherDetails weather={weatherData.current} />
          ) : null}
          
          {/* 5-day forecast */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">5-Day Forecast</h3>
            {isLoading ? (
              <div className="grid grid-cols-5 gap-2 md:gap-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-28 bg-white bg-opacity-10 animate-pulse" />
                ))}
              </div>
            ) : weatherData ? (
              <ForecastList forecasts={weatherData.forecast} />
            ) : null}
          </div>
          
          {/* Footer */}
          <div className="text-center text-white text-opacity-70 pt-6">
            <p className="text-sm">Weather App © {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </WeatherBackground>
  );
};

export default Index;
