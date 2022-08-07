import React from "react";
import { useForecast } from "../context/ForecastContext";
import moment from "moment";
import { IForecastDaily } from "../interfaces/Forecast";
import "./widgetForecast.scss";

const WidgetForecast = () => {
    const forecast = useForecast();

    let data: any = [];

    if (forecast !== null) {
        forecast.daily.forEach((element: any) => {
            switch (moment(element.dt * 1000).format("dddd")) {
                case "Sunday":
                    return data.push("Neděle");

                case "Monday":
                    return data.push("Pondělí");

                case "Tuesday":
                    return data.push("Úterý");

                case "Wednesday":
                    return data.push("Středa");
                case "Thursday":
                    return data.push("Čtvrtek");

                case "Friday":
                    return data.push("Pátek");
                case "Saturday":
                    return data.push("Sobota");
            }
        });
    }

    return (
        <>
            {forecast === null ? (
                "Spojeni"
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
                                    <span className="title">{data[i]}</span>
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
