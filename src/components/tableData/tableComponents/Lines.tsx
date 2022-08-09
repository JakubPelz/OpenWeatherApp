import React from "react";

interface ILines {
    data: {
        dataPlaceOne: number;
        dataPlaceTwo: number;
        name: string;
    };
}

const Lines = ({ data }: ILines) => {
    return (
        <tr>
            <td>{data?.name}</td>
            <td>
                <i
                    className={`fa ${
                        data?.dataPlaceOne < data?.dataPlaceTwo
                            ? "fa-remove"
                            : ""
                    }`}
                >
                    {data?.dataPlaceOne} &#176;C
                </i>
            </td>
            <td>
                <i
                    className={`fa ${
                        data?.dataPlaceOne > data?.dataPlaceTwo
                            ? "fa-remove"
                            : ""
                    }`}
                >
                    {data?.dataPlaceTwo} &#176;C
                </i>
            </td>
        </tr>
    );
};

export default Lines;
