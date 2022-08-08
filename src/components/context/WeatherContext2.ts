import { createContext, useContext } from "react";

export const WeatherContext2 = createContext<any>(null);

export const useWeather2 = () => useContext(WeatherContext2);
