import React, { useState } from "react";
import "./comparePlaces.scss";
import LanguageIcon from "@mui/icons-material/Language";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useWeather } from "../context/WeatherContext";
import CompareSearch from "./CompareSearch";
import CitiesData from "../../utils/city.list.json";

const ComparePlaces = () => {
    const weather = useWeather();
    return (
        <div className="navbarPlaces">
            <div className="findWrapper" style={{ height: "35px" }}>
                <div>
                    <span className="mainCity">Výchozí místo pro srovnání</span>
                </div>
                <div className="items">
                    <div className="item"></div>
                </div>
                <div className="items">
                    <div className="item">
                        <div className="item">
                            <MyLocationIcon className="icon" />
                            {weather?.name}
                        </div>
                        <div className="item">
                            <LanguageIcon className="icon" />
                            {weather?.sys.country}
                        </div>
                    </div>
                </div>
            </div>

            <CompareSearch CitiesData={CitiesData} />
        </div>
    );
};

export default ComparePlaces;
