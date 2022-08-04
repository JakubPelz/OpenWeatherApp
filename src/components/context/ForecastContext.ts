import { createContext, useContext } from "react";
import IForecast from "../interfaces/Forecast";

export const ForecastContext = createContext<IForecast | null>(null);

export const useForecast = () => useContext(ForecastContext);
