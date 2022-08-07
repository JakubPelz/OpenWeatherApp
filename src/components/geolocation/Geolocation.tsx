import React, { useEffect, useState, useCallback } from "react";
import "./geolocation.scss";
import { useCityContext } from "../context/CityContext";

export interface IGeolocation {
    latitude: number | null;
    longitude: number | null;
    error?: string;
}

const Geolocation = ({ CitiesData }: any) => {
    const [allCities, setAllCities] = useState<any>();
    const { setCity } = useCityContext();
    const [findLocation, setFindLocation] = useState<IGeolocation>({
        latitude: null,
        longitude: null,
        error: "",
    });
    const [findCity, setFindCity] = useState("");

    useEffect(() => {
        setAllCities(CitiesData);
    });

    const functionFindLocation = () => {
        window.navigator.geolocation.getCurrentPosition((position) =>
            setFindLocation({
                latitude: Math.round(position.coords.latitude * 100) / 100,
                longitude: Math.round(position.coords.longitude * 100) / 100,
            })
        );
        /* setFindLocation({
            latitude: Math.round(17.25 * 100) / 100,
            longitude: Math.round(99.666672 * 100) / 100,
        }); */
    };
    useEffect(() => {
        if (findLocation.latitude === null && findLocation.longitude === null) {
        } else {
            const newPlace = allCities.filter((value: any) => {
                return (
                    Math.round(value.coord.lat * 100) / 100 ===
                        findLocation.latitude &&
                    Math.round(value.coord.lon * 100) / 100 ===
                        findLocation.longitude
                );
            });
            setFindCity(newPlace[0].name);
            setFindLocation({
                latitude: null,
                longitude: null,
            });
        }
    }, [findLocation.latitude, findLocation.longitude]);

    if (findCity.length > 1) {
        setCity(findCity);
        setFindCity("");
    }
    console.log(findCity);
    return (
        <button onClick={functionFindLocation} className="button">
            Zjistit polohu
        </button>
    );
};

export default Geolocation;
