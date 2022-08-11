import React, { useState } from "react";
import "./button.scss";

interface IButton {
    name: string | undefined;
}

const Button = ({ name }: IButton) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const onClick = () => {
        if (isActive === false) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    return (
        <button className={isActive ? "active" : ""} onClick={() => onClick()}>
            {name}
        </button>
    );
};

export default Button;
