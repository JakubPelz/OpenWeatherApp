import "./navbar.scss";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PinDropIcon from "@mui/icons-material/PinDrop";

import { useWeather } from "../context/WeatherContext";
import Geolocation from "../geolocation/Geolocation";

const NavBar = () => {
    const weather = useWeather();
    const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

    return (
        <div className="navbar">
            <div className="wrapper">
                <div>
                    <span className="logo">OpenWeatherApi APP</span>
                </div>
                <div className="items">
                    <div className="item search">
                        <input type="text" placeholder="Vyhledej město" />
                        <SearchIcon />
                    </div>
                    <div className="item">
                        <PinDropIcon className="icon" />
                        <Geolocation />
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
                            {event.toLocaleString("en-GB", {
                                timeZone: "UTC",
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
