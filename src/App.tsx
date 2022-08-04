import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { WeatherContext } from './components/context/WeatherContext';
import { ForecastContext } from './components/context/ForecastContext';
import { getCityContext } from './components/context/CityContext';
import routes from './components/routes/Routes';
import ApiClient from './api/ApiClient';

import IRoute from './components/interfaces/Routes';
import IWeather from './components/interfaces/Weather';
import IForecast from './components/interfaces/Forecast';

function App() {
    const [city, setCity] = useState<string>('Olomouc');
    const [weather, setWeather] = useState<IWeather | null>(null);
    const [forecast, setForecast] = useState<IForecast | null>(null);

    let longtitude = weather === null ? 17.25 : weather.coord.lon;
    const latitude = weather === null ? 49.59 : weather.coord.lat;

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

    console.log(city);

    return (
        <getCityContext.Provider value={{ city, setCity }}>
            <WeatherContext.Provider value={weather}>
                <ForecastContext.Provider value={forecast}>
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
            </WeatherContext.Provider>
        </getCityContext.Provider>
    );
}

export default App;
