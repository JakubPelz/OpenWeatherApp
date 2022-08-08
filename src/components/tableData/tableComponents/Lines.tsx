import React from 'react';

interface ILines {
    data: { evePlaceOne?: number; evePlaceTwo: number; name: string };
}

const Lines = (data: ILines) => {
    return (
        <tr>
            <td>{}</td>
            <td>
                <i className="fa fa-remove">{}</i>
            </td>
            <td>
                <i className="fa fa-check">{}</i>
            </td>
        </tr>
    );
};

export default Lines;
