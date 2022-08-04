import { createContext, useContext } from 'react';
import IWeather from '../interfaces/Weather';

export const WeatherContext = createContext<IWeather | null>(null);

export const useWeather = () => useContext(WeatherContext);
