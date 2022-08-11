import "./chart.scss";
import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import moment from "moment";
import Button from "../buttons/Button";

import { useForecast } from "../context/ForecastContext";
import { useForecast2 } from "../context/ForecastContext2";
import { useWeather } from "../context/WeatherContext";
import { useWeather2 } from "../context/WeatherContext2";

const Chart = () => {
    const { forecast2 } = useForecast2();
    const forecast = useForecast();
    const weather = useWeather();
    const { weather2 } = useWeather2();
    const [grafActive, setGrafActive] = useState<any>({});

    console.log(grafActive);
    let data: any = [];
    let data2: any = [];

    if (forecast !== null) {
        forecast.daily.forEach((element: any) => {
            data.push({
                Date: moment(element.dt * 1000).format("L"),
                Hlavní_Město: element.temp.day,
            });
        });
    }

    if (forecast2 !== null) {
        forecast2.daily.forEach((element: any) => {
            data2.push({ Srovnávané_Město: element.temp.day });
        });
    }

    let merged = data.map((item: any, i: number) =>
        Object.assign({}, item, data2[i])
    );

    const onSet = (data: any) => {
        setGrafActive(data);
    };

    return (
        <div className="chart">
            <span className="topNav">
                <div className="title">Grafická předpověď na další dny</div>

                <div className="groupButton">
                    <div onClick={() => onSet(weather?.name)}>
                        <Button name={weather?.name} />
                    </div>
                    <div onClick={() => onSet(weather2?.name)}>
                        <Button name={weather2?.name} />
                    </div>
                </div>
            </span>
            <div className="chartContainer">
                <div className="chartContainerCenter">
                    <LineChart
                        width={780}
                        height={350}
                        data={merged}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="Hlavní_Město"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="Srovnávané_Město"
                            stroke="#82ca9d"
                        />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Chart;
