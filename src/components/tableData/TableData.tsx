import React, { useEffect, useState } from 'react';
import './tableData.scss';
import Lines from './tableComponents/Lines';
import { useForecast } from '../context/ForecastContext';
import { useForecast2 } from '../context/ForecastContext2';
import { useWeather } from '../context/WeatherContext';
import { useWeather2 } from '../context/WeatherContext2';
import DayToCz from '../dayToCz/DayToCz';
import moment from 'moment';

const TableData = () => {
    const mainWeather = useWeather();
    const { weather2 } = useWeather2();
    const mainForecast = useForecast();
    const { forecast2 } = useForecast2();
    const [idDay, setIdDay] = useState<number>(0);

    return (
        <div className="tableData">
            <div className="menu">
                {mainForecast?.daily.map((element: any, idx: number) => {
                    return (
                        <span
                            key={idx}
                            className="menuItem"
                            onClick={() => setIdDay(idx)}
                        >
                            <DayToCz day={element.dt} />
                        </span>
                    );
                })}
            </div>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: '50%' }}>Porovnávaná hodnota</th>
                        <th>{mainWeather?.name}</th>
                        <th>{weather2?.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <Lines
                        data={{
                            name: 'Průměrná denní teplota',
                            dataPlaceOne: mainForecast?.daily[idDay].temp.eve,
                            dataPlaceTwo: forecast2?.daily[idDay].temp.eve,
                        }}
                    />
                    <Lines
                        data={{
                            name: 'Denní maximum',
                            dataPlaceOne: mainForecast?.daily[idDay].temp.max,
                            dataPlaceTwo: forecast2?.daily[idDay].temp.max,
                        }}
                    />
                    <Lines
                        data={{
                            name: 'Denní minimum',
                            dataPlaceOne: mainForecast?.daily[idDay].temp.min,
                            dataPlaceTwo: forecast2?.daily[idDay].temp.min,
                        }}
                    />
                </tbody>
            </table>
        </div>
    );
};

export default TableData;
