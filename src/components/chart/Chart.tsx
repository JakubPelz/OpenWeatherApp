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
import { IForecastDaily } from "../interfaces/Forecast";
import {
    useWeather,
    useWeather2,
    useForecast,
    useForecast2,
} from "../context/DataContext";

const Chart = () => {
    const { forecast2 } = useForecast2();
    const { forecast } = useForecast();
    const { weather } = useWeather();
    const { weather2 } = useWeather2();
    const [grafActive, setGrafActive] = useState<boolean>(true);
    const [grafActive2, setGrafActive2] = useState<boolean>(true);

    let data: any = [];
    let data2: any = [];

    if (forecast !== undefined) {
        forecast.daily.forEach((element: IForecastDaily) => {
            data.push({
                Date: moment(element.dt * 1000).format("L"),
                Hlavní_Město: element.temp.day,
            });
        });
    }

    if (forecast2 !== undefined) {
        forecast2.daily.forEach((element: IForecastDaily) => {
            data2.push({ Srovnávané_Město: element.temp.day });
        });
    }

    let merged = data.map((item: any, i: number) =>
        Object.assign({}, item, data2[i])
    );

    const onSet = () => {
        if (grafActive === true) {
            setGrafActive(false);
        } else {
            setGrafActive(true);
        }
    };

    const onSet2 = () => {
        if (grafActive2 === true) {
            setGrafActive2(false);
        } else {
            setGrafActive2(true);
        }
    };

    return (
        <div className="chart">
            <span className="topNav">
                <div className="title">
                    Grafická předpověď na další dny ve stupních celsia
                </div>

                <div className="groupButton">
                    <div onClick={() => onSet()}>
                        <Button name={weather?.name} />
                    </div>
                    <div onClick={() => onSet2()}>
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
                            dataKey={grafActive ? "Hlavní_Město" : ""}
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey={grafActive2 ? "Srovnávané_Město" : ""}
                            stroke="#82ca9d"
                        />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Chart;
