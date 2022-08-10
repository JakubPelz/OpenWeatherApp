import React from "react";
import moment from "moment";

interface ILines {
    data: {
        dataPlaceOne: number;
        dataPlaceTwo: number;
        name: string;
        value: string;
    };
}

const Lines = ({ data }: ILines) => {
    if (data?.value === "time") {
        let today = Date.now();
        let getTime = new Date(data.dataPlaceOne * 1000);

        console.log(getTime);
    }

    const today = () => {
        switch (data?.value) {
            case "time":
                return "hod";

            case "%":
                return "%";

            case "temperature":
                return <>&#176;C</>;

            case "km":
                return "hm/h";
        }
    };
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
                    {data?.value === "time" ? (
                        <>{}</>
                    ) : (
                        <>{data?.dataPlaceTwo}</>
                    )}{" "}
                    {today()}
                </i>
            </td>
        </tr>
    );
};

export default Lines;
