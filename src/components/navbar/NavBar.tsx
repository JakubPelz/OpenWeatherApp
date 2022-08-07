import "./navbar.scss";
import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PinDropIcon from "@mui/icons-material/PinDrop";

import { useWeather } from "../context/WeatherContext";
import Geolocation from "../geolocation/Geolocation";
import Search from "../search/Search";
import moment from "moment";
import CitiesData from "../../utils/city.list.json";

const NavBar = () => {
    const weather = useWeather();
    return (
        <div className="navbar">
            <div className="wrapper">
                <div>
                    <span className="logo">OpenWeatherApi APP</span>
                </div>
                <div className="items">
                    <Search CitiesData={CitiesData} />

                    <div className="item">
                        <PinDropIcon className="icon" />
                        <Geolocation CitiesData={CitiesData} />
                    </div>
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
                        <div className="item">
                            <QueryBuilderIcon className="icon" />
                            {moment().format("DD-MM-YYYY hh:mm:ss")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
