import React from 'react';
import moment from 'moment';
import 'moment/locale/cs';

interface ILines {
    data: {
        dataPlaceOne: number;
        dataPlaceTwo: number;
        name: string;
        value: string;
    };
}

const Lines = ({ data }: ILines) => {
    const today = () => {
        switch (data?.value) {
            case 'time':
                return 'hod';

            case '%':
                return '%';

            case 'temperature':
                return <>&#176;C</>;

            case 'km':
                return 'hm/h';
        }
    };
    return (
        <tr>
            <td>{data?.name}</td>
            <td>
                <i
                    className={`fa ${
                        data?.dataPlaceOne < data?.dataPlaceTwo
                            ? 'fa-remove'
                            : ''
                    }`}
                >
                    {data?.value === 'time' ? (
                        <>{moment(data.dataPlaceOne * 1000).format('LTS')}</>
                    ) : (
                        <>{data?.dataPlaceOne}</>
                    )}{' '}
                    {today()}
                </i>
            </td>
            <td>
                <i
                    className={`fa ${
                        data?.dataPlaceOne > data?.dataPlaceTwo
                            ? 'fa-remove'
                            : ''
                    }`}
                >
                    {data?.value === 'time' ? (
                        <>{moment(data.dataPlaceTwo * 1000).format('LTS')}</>
                    ) : (
                        <>{data?.dataPlaceTwo}</>
                    )}{' '}
                    {today()}
                </i>
            </td>
        </tr>
    );
};

export default Lines;
