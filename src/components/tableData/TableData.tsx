import React, { useState } from "react";
import "./tableData.scss";
import Lines from "./tableComponents/Lines";
import {
    useWeather,
    useWeather2,
    useForecast,
    useForecast2,
} from "../context/DataContext";
import DayToCz from "../dayToCz/DayToCz";
import moment from "moment";
import { IForecastDaily } from "../interfaces/Forecast";

const TableData = () => {
    const { weather } = useWeather();
    const { weather2 } = useWeather2();
    const { forecast } = useForecast();
    const { forecast2 } = useForecast2();
    const [idDay, setIdDay] = useState<number>(0);

    return (
        <div className="tableData">
            <div className="menu">
                {forecast?.daily.map((element: IForecastDaily, idx: number) => {
                    return (
                        <span
                            key={idx}
                            className="menuItem"
                            onClick={() => setIdDay(idx)}
                        >
                            <DayToCz day={element.dt} />
                            <div className="menuDate">
                                {moment(element.dt * 1000).format("L")}
                            </div>
                        </span>
                    );
                })}
            </div>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "50%" }}>Porovnávaná hodnota</th>
                        <th>{weather?.name}</th>
                        <th>{weather2?.name}</th>
                    </tr>
                </thead>

                {forecast === undefined || forecast2 === undefined ? (
                    ""
                ) : (
                    <tbody>
                        <Lines
                            data={{
                                name: "Průměrná denní teplota",
                                dataPlaceOne: forecast.daily[idDay].temp.eve,
                                dataPlaceTwo: forecast2.daily[idDay].temp.eve,
                                value: "temperature",
                            }}
                        />
                        <Lines
                            data={{
                                name: "Denní maximum",
                                dataPlaceOne: forecast.daily[idDay].temp.max,
                                dataPlaceTwo: forecast2.daily[idDay].temp.max,
                                value: "temperature",
                            }}
                        />
                        <Lines
                            data={{
                                name: "Denní minimum",
                                dataPlaceOne: forecast.daily[idDay].temp.min,
                                dataPlaceTwo: forecast2.daily[idDay].temp.min,
                                value: "temperature",
                            }}
                        />
                        <Lines
                            data={{
                                name: "Vlhkost vyzduchu",
                                dataPlaceOne: forecast.daily[idDay].humidity,
                                dataPlaceTwo: forecast2.daily[idDay].humidity,
                                value: "%",
                            }}
                        />
                        <Lines
                            data={{
                                name: "Rychlost větru",
                                dataPlaceOne: forecast.daily[idDay].wind_speed,
                                dataPlaceTwo: forecast2.daily[idDay].wind_speed,
                                value: "km",
                            }}
                        />
                        <Lines
                            data={{
                                name: "Východ slunce",
                                dataPlaceOne: forecast.daily[idDay].sunrise,
                                dataPlaceTwo: forecast2.daily[idDay].sunrise,
                                value: "time",
                            }}
                        />
                        <Lines
                            data={{
                                name: "Západ slunce",
                                dataPlaceOne: forecast.daily[idDay].sunset,
                                dataPlaceTwo: forecast2.daily[idDay].sunset,
                                value: "time",
                            }}
                        />
                    </tbody>
                )}
            </table>
        </div>
    );
};

export default TableData;
