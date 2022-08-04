import React, { useEffect, useState } from "react";
import "./geolocation.scss";
import { useLocationContext } from "../context/LocationContext";

const Geolocation = () => {
    const { location, setLocation } = useLocationContext();
    const findLocation = () => {
        window.navigator.geolocation.getCurrentPosition((position: any) =>
            setLocation(position)
        );
    };
    console.log(location);
    return (
        <button onClick={findLocation} className="button">
            Zjistit polohu
        </button>
    );
};

export default Geolocation;
