import "./chart.scss";
import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import moment from "moment";

import { useForecast } from "../context/ForecastContext";

const Chart = () => {
    const weatherData: any = useForecast();

    let data: any = [];

    if (weatherData !== null) {
        weatherData.daily.forEach((element: any) => {
            data.push({
                name: moment(element.dt * 1000).format("dddd"),
                total: element.temp.day,
            });
        });
    }

    return (
        <div className="chart">
            <div className="title">Grafická předpověď na další dny</div>
            <div className="chartContainer">
                <AreaChart
                    width={1000}
                    height={350}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid
                        strokeDasharray="3 3"
                        className="chartGrid"
                    />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#Total)"
                    />
                </AreaChart>
            </div>
        </div>
    );
};

export default Chart;
