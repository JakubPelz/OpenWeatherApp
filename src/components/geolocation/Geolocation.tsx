import React, { useEffect, useState } from "react";
import "./geolocation.scss";
import { useLocationContext } from "../context/LocationContext";

export interface IGeolocation {
    latitude: number | null;
    longitude: number | null;
    error?: string;
}

const Geolocation = () => {
    const { setLocation } = useLocationContext();
    const [findLocation, setFindLocation] = useState<IGeolocation>({
        latitude: null,
        longitude: null,
        error: "",
    });

    const functionFindLocation = () => {
        window.navigator.geolocation.getCurrentPosition((position) =>
            setFindLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        );
    };

    useEffect(() => {
        setLocation(findLocation);
    });

    return (
        <button onClick={functionFindLocation} className="button">
            Zjistit polohu
        </button>
    );
};

export default Geolocation;
