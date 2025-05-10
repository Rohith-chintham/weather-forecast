
export interface CurrentWeather {
  temperature: number;
  condition: WeatherCondition;
  humidity: number;
  wind: {
    speed: number;
    direction: string;
  };
  location: string;
  feelsLike: number;
  uvIndex: number;
  pressure: number;
  visibility: number;
  lastUpdated: string;
}

export interface DailyForecast {
  date: string;
  dayOfWeek: string;
  temperature: {
    min: number;
    max: number;
  };
  condition: WeatherCondition;
  precipitation: number;
}

export type WeatherCondition = 
  | 'clear'
  | 'partly-cloudy'
  | 'cloudy'
  | 'rain'
  | 'thunderstorm'
  | 'snow'
  | 'mist';

export interface WeatherData {
  current: CurrentWeather;
  forecast: DailyForecast[];
}

export interface Location {
  name: string;
  country: string;
  lat: number;
  lon: number;
}
