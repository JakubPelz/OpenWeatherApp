import { createContext, useContext } from "react";

export const ForecastContext = createContext<any>(null);

export const useForecast = () => useContext(ForecastContext);
