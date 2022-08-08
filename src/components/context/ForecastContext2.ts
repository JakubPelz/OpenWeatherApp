import { createContext, useContext } from "react";

export const ForecastContext2 = createContext<any>(null);

export const useForecast2 = () => useContext(ForecastContext2);
