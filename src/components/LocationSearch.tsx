
import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Location } from '@/types/weather';
import { searchLocations } from '@/services/weatherApi';

interface LocationSearchProps {
  onLocationSelect: (location: string) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onLocationSelect }) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Location[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSearch = async () => {
      if (!query) {
        setResults([]);
        return;
      }
      
      setIsSearching(true);
      try {
        const locations = await searchLocations(query);
        setResults(locations);
      } catch (error) {
        console.error('Error searching locations:', error);
      } finally {
        setIsSearching(false);
      }
    };
    
    const debounceTimer = setTimeout(handleSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocationClick = (location: Location) => {
    onLocationSelect(location.name);
    setQuery('');
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative w-full md:w-64" ref={searchRef}>
      <div className="relative">
        <Input
          placeholder="Search locations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleInputFocus}
          className="pl-9 bg-white bg-opacity-20 backdrop-blur-sm border-0 placeholder-gray-300 text-white"
        />
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-white" />
      </div>
      
      {isOpen && (results.length > 0 || isSearching) && (
        <Card className="absolute mt-1 w-full z-10 p-2 max-h-60 overflow-auto">
          {isSearching ? (
            <div className="p-2 text-sm text-center text-gray-500">Searching...</div>
          ) : (
            <ul>
              {results.map((location, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => handleLocationClick(location)}
                  >
                    {location.name}, {location.country}
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </Card>
      )}
    </div>
  );
};

export default LocationSearch;
