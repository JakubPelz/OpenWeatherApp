import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { getCityContext } from "./components/context/CityContext";
import { getDarkModeContext } from "./components/context/DarkModeContext";
import {
    WeatherContext,
    WeatherContext2,
    ForecastContext,
    ForecastContext2,
    MultiContext,
} from "./components/context/DataContext";
import routes from "./components/routes/Routes";
import ApiClient from "./api/ApiClient";
import IRoute from "./components/interfaces/Routes";
import IWeather from "./components/interfaces/Weather";
import IForecast from "./components/interfaces/Forecast";

function App() {
    const [city, setCity] = useState<string>("Olomouc");
    const [weather, setWeather] = useState<IWeather>();
    const [forecast, setForecast] = useState<IForecast>();
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [weather2, setWeather2] = useState<IWeather>();
    const [forecast2, setForecast2] = useState<IForecast>();

    const valueForecast = useMemo(
        () => ({
            forecast,
            setForecast,
            forecast2,
            setForecast2,
            weather,
            setWeather,
            weather2,
            setWeather2,
        }),
        [forecast]
    );

    let longtitude: number = weather === undefined ? 17.25 : weather?.coord.lon;
    let latitude: number = weather === undefined ? 49.59 : weather?.coord.lat;

    useEffect(() => {
        ApiClient.getWeather(`${city}`)
            .then(({ data }) => {
                setWeather(data);
            })
            .catch((error) => console.log(error));
    }, [city]);

    const fetchData = useCallback(() => {
        ApiClient.getForecast(latitude, longtitude)
            .then(({ data }) => {
                setForecast(data);
            })
            .catch((error) => console.log(error));
    }, [latitude, longtitude]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <MultiContext.Provider value={valueForecast}>
            <getDarkModeContext.Provider value={{ darkMode, setDarkMode }}>
                <getCityContext.Provider value={{ city, setCity }}>
                    <WeatherContext2.Provider value={{ weather2, setWeather2 }}>
                        <WeatherContext.Provider
                            value={{ weather, setWeather }}
                        >
                            <ForecastContext2.Provider
                                value={{ forecast2, setForecast2 }}
                            >
                                <ForecastContext.Provider value={valueForecast}>
                                    <Routes>
                                        {routes.map((route: IRoute, i: any) => (
                                            <Route
                                                key={i}
                                                path={route.path}
                                                element={<route.component />}
                                            ></Route>
                                        ))}
                                    </Routes>
                                </ForecastContext.Provider>
                            </ForecastContext2.Provider>
                        </WeatherContext.Provider>
                    </WeatherContext2.Provider>
                </getCityContext.Provider>
            </getDarkModeContext.Provider>
        </MultiContext.Provider>
    );
}

export default App;
