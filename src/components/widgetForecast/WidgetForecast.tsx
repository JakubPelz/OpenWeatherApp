import React from "react";
import { useForecast } from "../context/DataContext";
import { IForecastDaily } from "../interfaces/Forecast";
import "./widgetForecast.scss";
import DayToCz from "../dayToCz/DayToCz";
import Spinner from "../spinner/Spinner";

const WidgetForecast = () => {
    const { forecast } = useForecast();

    return (
        <>
            {forecast === undefined ? (
                <Spinner />
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
                                        <DayToCz day={daily.dt} />
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
