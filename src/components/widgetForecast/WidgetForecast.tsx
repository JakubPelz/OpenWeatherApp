import React from 'react';
import { useForecast } from '../context/ForecastContext';
import moment from 'moment';
import { IForecastDaily } from '../interfaces/Forecast';
import './widgetForecast.scss';
import DaysToCz from '../daysToCz/DaysToCz';

const WidgetForecast = () => {
    const forecast = useForecast();
    return (
        <>
            {forecast === null ? (
                'Spojeni'
            ) : (
                <div className="widgets">
                    {forecast.daily.map((daily: IForecastDaily, i: number) => {
                        return (
                            <div key={i} className="widget">
                                <div className="left">
                                    <span className="celsia">TEPLOTA</span>
                                    <span className="celsiaNumber">
                                        noční - {daily.temp.night}
                                        &#176;C
                                    </span>
                                    <span className="celsiaNumber">
                                        denní - {daily.temp.day}
                                        &#176;C
                                    </span>
                                </div>
                                <div className="right">
                                    <span className="title">
                                        <DaysToCz />
                                    </span>
                                    <div className="icon">
                                        <img
                                            src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@4x.png`}
                                            alt="weather icon"
                                            className="imageIcon"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default WidgetForecast;
