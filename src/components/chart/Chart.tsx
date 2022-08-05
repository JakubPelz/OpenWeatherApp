import './chart.scss';
import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

const data = [
    {
        name: 'Leden',
        Total: 28000,
    },
    {
        name: 'Únor',
        Total: 32000,
    },
    {
        name: 'Březen',
        Total: 29600,
    },
    {
        name: 'Duben',
        Total: 41000,
    },
    {
        name: 'Květen',
        Total: 26000,
    },
    {
        name: 'Červen',
        Total: 39100,
    },
];

const Chart = () => {
    return (
        <div className="chart">
            <div className="title">Vykon za poslednich 6 mesicu</div>
            <AreaChart
                width={730}
                height={250}
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
                <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="Total"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#Total)"
                />
            </AreaChart>
        </div>
    );
};

export default Chart;
