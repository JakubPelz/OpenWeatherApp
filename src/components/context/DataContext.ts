import { createContext, useContext } from "react";
import IForecast from "../interfaces/Forecast";
import IWeather from "../interfaces/Weather";

//Forecast
export interface IForecastContext {
    forecast: IForecast | undefined;
    setForecast: (forecast: IForecast) => void;
}

export const ForecastContext = createContext<IForecastContext>(
    {} as IForecastContext
);
export const useForecast = () => useContext(ForecastContext);

//Forecast2
export interface IForecastContext2 {
    forecast2: IForecast | undefined;
    setForecast2: (forecast2: IForecast) => void;
}
export const ForecastContext2 = createContext<IForecastContext2>(
    {} as IForecastContext2
);

export const useForecast2 = () => useContext(ForecastContext2);

//Weather
interface IWeatherContext {
    weather: IWeather | undefined;
    setWeather: (weather: IWeather) => void;
}
export const WeatherContext = createContext<IWeatherContext>(
    {} as IWeatherContext
);

export const useWeather = () => useContext(WeatherContext);

//Weather2

interface IWeatherContext2 {
    weather2: IWeather | undefined;
    setWeather2: (weather2: IWeather) => void;
}
export const WeatherContext2 = createContext<IWeatherContext2>(
    {} as IWeatherContext2
);

export const useWeather2 = () => useContext(WeatherContext2);

interface IMultiContext {
    forecast: IForecast | undefined;
    setForecast: (forecast: IForecast) => void;
    forecast2: IForecast | undefined;
    setForecast2: (forecast2: IForecast) => void;
    weather: IWeather | undefined;
    setWeather: (weather: IWeather) => void;
    weather2: IWeather | undefined;
    setWeather2: (weather2: IWeather) => void;
}

export const MultiContext = createContext<IMultiContext>({} as IMultiContext);
