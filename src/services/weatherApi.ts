
import { WeatherData, Location } from '@/types/weather';

// Mock data for our weather app
const mockWeatherData: Record<string, WeatherData> = {
  'New York': {
    current: {
      temperature: 72,
      condition: 'partly-cloudy',
      humidity: 65,
      wind: {
        speed: 8,
        direction: 'NE'
      },
      location: 'New York, US',
      feelsLike: 74,
      uvIndex: 6,
      pressure: 1012,
      visibility: 10,
      lastUpdated: '2023-05-10T14:30:00Z'
    },
    forecast: [
      {
        date: '2023-05-10',
        dayOfWeek: 'Wed',
        temperature: {
          min: 68,
          max: 76
        },
        condition: 'partly-cloudy',
        precipitation: 10
      },
      {
        date: '2023-05-11',
        dayOfWeek: 'Thu',
        temperature: {
          min: 65,
          max: 75
        },
        condition: 'rain',
        precipitation: 60
      },
      {
        date: '2023-05-12',
        dayOfWeek: 'Fri',
        temperature: {
          min: 62,
          max: 71
        },
        condition: 'rain',
        precipitation: 80
      },
      {
        date: '2023-05-13',
        dayOfWeek: 'Sat',
        temperature: {
          min: 64,
          max: 73
        },
        condition: 'partly-cloudy',
        precipitation: 20
      },
      {
        date: '2023-05-14',
        dayOfWeek: 'Sun',
        temperature: {
          min: 68,
          max: 78
        },
        condition: 'clear',
        precipitation: 0
      }
    ]
  },
  'London': {
    current: {
      temperature: 62,
      condition: 'rain',
      humidity: 80,
      wind: {
        speed: 12,
        direction: 'SW'
      },
      location: 'London, UK',
      feelsLike: 59,
      uvIndex: 3,
      pressure: 1008,
      visibility: 5,
      lastUpdated: '2023-05-10T14:30:00Z'
    },
    forecast: [
      {
        date: '2023-05-10',
        dayOfWeek: 'Wed',
        temperature: {
          min: 58,
          max: 64
        },
        condition: 'rain',
        precipitation: 70
      },
      {
        date: '2023-05-11',
        dayOfWeek: 'Thu',
        temperature: {
          min: 56,
          max: 62
        },
        condition: 'cloudy',
        precipitation: 30
      },
      {
        date: '2023-05-12',
        dayOfWeek: 'Fri',
        temperature: {
          min: 55,
          max: 64
        },
        condition: 'partly-cloudy',
        precipitation: 20
      },
      {
        date: '2023-05-13',
        dayOfWeek: 'Sat',
        temperature: {
          min: 59,
          max: 66
        },
        condition: 'partly-cloudy',
        precipitation: 10
      },
      {
        date: '2023-05-14',
        dayOfWeek: 'Sun',
        temperature: {
          min: 60,
          max: 68
        },
        condition: 'clear',
        precipitation: 0
      }
    ]
  },
  'Tokyo': {
    current: {
      temperature: 80,
      condition: 'clear',
      humidity: 55,
      wind: {
        speed: 5,
        direction: 'E'
      },
      location: 'Tokyo, JP',
      feelsLike: 82,
      uvIndex: 8,
      pressure: 1015,
      visibility: 10,
      lastUpdated: '2023-05-10T14:30:00Z'
    },
    forecast: [
      {
        date: '2023-05-10',
        dayOfWeek: 'Wed',
        temperature: {
          min: 75,
          max: 84
        },
        condition: 'clear',
        precipitation: 0
      },
      {
        date: '2023-05-11',
        dayOfWeek: 'Thu',
        temperature: {
          min: 76,
          max: 85
        },
        condition: 'partly-cloudy',
        precipitation: 10
      },
      {
        date: '2023-05-12',
        dayOfWeek: 'Fri',
        temperature: {
          min: 77,
          max: 86
        },
        condition: 'partly-cloudy',
        precipitation: 20
      },
      {
        date: '2023-05-13',
        dayOfWeek: 'Sat',
        temperature: {
          min: 76,
          max: 83
        },
        condition: 'cloudy',
        precipitation: 40
      },
      {
        date: '2023-05-14',
        dayOfWeek: 'Sun',
        temperature: {
          min: 74,
          max: 82
        },
        condition: 'rain',
        precipitation: 60
      }
    ]
  },
  'Sydney': {
    current: {
      temperature: 65,
      condition: 'clear',
      humidity: 60,
      wind: {
        speed: 10,
        direction: 'SE'
      },
      location: 'Sydney, AU',
      feelsLike: 66,
      uvIndex: 7,
      pressure: 1020,
      visibility: 10,
      lastUpdated: '2023-05-10T14:30:00Z'
    },
    forecast: [
      {
        date: '2023-05-10',
        dayOfWeek: 'Wed',
        temperature: {
          min: 60,
          max: 68
        },
        condition: 'clear',
        precipitation: 0
      },
      {
        date: '2023-05-11',
        dayOfWeek: 'Thu',
        temperature: {
          min: 61,
          max: 70
        },
        condition: 'clear',
        precipitation: 0
      },
      {
        date: '2023-05-12',
        dayOfWeek: 'Fri',
        temperature: {
          min: 63,
          max: 72
        },
        condition: 'partly-cloudy',
        precipitation: 10
      },
      {
        date: '2023-05-13',
        dayOfWeek: 'Sat',
        temperature: {
          min: 65,
          max: 73
        },
        condition: 'partly-cloudy',
        precipitation: 20
      },
      {
        date: '2023-05-14',
        dayOfWeek: 'Sun',
        temperature: {
          min: 62,
          max: 70
        },
        condition: 'cloudy',
        precipitation: 30
      }
    ]
  }
};

const mockLocations: Location[] = [
  { name: 'New York', country: 'US', lat: 40.7128, lon: -74.0060 },
  { name: 'London', country: 'UK', lat: 51.5074, lon: -0.1278 },
  { name: 'Tokyo', country: 'JP', lat: 35.6762, lon: 139.6503 },
  { name: 'Sydney', country: 'AU', lat: -33.8688, lon: 151.2093 },
];

// Helper to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const fetchWeatherData = async (location: string): Promise<WeatherData> => {
  await delay(500); // Simulate network delay
  
  // Default to New York if location not found
  if (!mockWeatherData[location]) {
    return mockWeatherData['New York'];
  }
  
  return mockWeatherData[location];
};

export const searchLocations = async (query: string): Promise<Location[]> => {
  await delay(300); // Simulate network delay
  
  if (!query) return [];
  
  const lowercaseQuery = query.toLowerCase();
  return mockLocations.filter(location => 
    location.name.toLowerCase().includes(lowercaseQuery) ||
    location.country.toLowerCase().includes(lowercaseQuery)
  );
};
