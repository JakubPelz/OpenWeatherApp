import "./featureChart.scss";
import React from "react";
import { useForecast } from "../context/ForecastContext";
import DayToCz from "../dayToCz/DayToCz";

const FeaturedChart = () => {
    const day: any = useForecast();
    return (
        <div className="featured">
            {day === null ? (
                <div></div>
            ) : (
                <>
                    {" "}
                    <div className="top">
                        <h1 className="title">Detail předpovědi pro dnešek</h1>
                        <h1 className="title">
                            <DayToCz day={day.daily[0].dt} />
                        </h1>
                    </div>
                    <div className="bottom">
                        <div className="featuredChart">
                            {day === null ? (
                                <div>nenacteno</div>
                            ) : (
                                <img
                                    src={`http://openweathermap.org/img/wn/${day.daily[0].weather[0].icon}@4x.png`}
                                    alt="weather icon"
                                    className="w-icon"
                                />
                            )}
                        </div>
                        <p className="title">Průměrná denní teplota</p>
                        <p className="amount">
                            {day.daily[0].temp.eve} &#176;C
                        </p>
                        <div className="summary">
                            <div className="item">
                                <div className="itemTitle">
                                    Ranní teplota:{" "}
                                    <div className="itemResult">
                                        {day.daily[0].temp.morn} &#176;C %
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="itemTitle">
                                    Večerní teplota:{" "}
                                    <div className="itemResult">
                                        {day.daily[0].temp.night} &#176;C
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="itemTitle">
                                    Průměrná denní teplota:{" "}
                                    <div className="itemResult">
                                        {day.daily[0].temp.day} &#176;C
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="summary">
                            <div className="item">
                                <div className="itemTitle">
                                    Vlhkost:{" "}
                                    <div className="itemResult">
                                        {day.daily[0].humidity} %
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="itemTitle">
                                    Vítr:{" "}
                                    <div className="itemResult">
                                        {day.daily[0].wind_speed} km/h
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default FeaturedChart;
