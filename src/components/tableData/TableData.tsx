import React from 'react';
import './tableData.scss';
import Lines from './tableComponents/Lines';
import { useForecast } from '../context/ForecastContext';
import { useForecast2 } from '../context/ForecastContext2';
import { useWeather } from '../context/WeatherContext';
import { useWeather2 } from '../context/WeatherContext2';

const TableData = () => {
    const mainWeather = useWeather();
    const { weather2 } = useWeather2();
    const mainForecast = useForecast();
    const { forecast2 } = useForecast2();

    return (
        <div className="tableData">
            Tady se budou překlikávat dny
            <table>
                <tr>
                    <th style={{ width: '50%' }}>Porovnávaná hodnota</th>
                    <th>{mainWeather?.name}</th>
                    <th>{weather2?.name}</th>
                </tr>
                <Lines
                    data={{
                        name: 'Průměrná denní teplota',
                        evePlaceOne: mainForecast?.daily[0].temp.eve,
                        evePlaceTwo: forecast2?.daily[0].temp.eve,
                    }}
                />
                {/*  <Lines data={{ name: 'Teplota' }} />
                <Lines data={{ name: 'Teplota' }} /> */}
            </table>
        </div>
    );
};

export default TableData;
