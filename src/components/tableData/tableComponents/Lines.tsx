import React from "react";

interface ILines {
    data: any;
}

const Lines = ({ data }: ILines) => {
    console.log(data);
    return (
        <tr>
            <td>{data?.name}</td>
            <td>
                <i className="fa fa-remove">18</i>
            </td>
            <td>
                <i className="fa fa-check">29</i>
            </td>
        </tr>
    );
};

export default Lines;
