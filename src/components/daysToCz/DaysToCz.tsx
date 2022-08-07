import React from 'react';
import { useForecast } from '../context/ForecastContext';
import moment from 'moment';

const DaysToCz = () => {
    const forecast = useForecast();

    let data: any = [];

    if (forecast !== null) {
        forecast.daily.forEach((element: any) => {
            data.push(moment(element.dt * 1000).format('dddd'));
        });
    }

    const dayNameCz = () => {
        for (var i = 0; i < data.length; i++) {
            switch (data[i]) {
                case 'Sunday':
                    return 'Dnes';
                case 'Wednesday':
                    return 'Yeup';
                default:
                    return 'Ahoj';
            }
        }
    };

    console.log(data);
    return <div>{dayNameCz()}</div>;
};

export default DaysToCz;
