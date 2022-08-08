import React, { useState } from "react";
import "./comparePlaces.scss";
import { useForecast } from "../context/ForecastContext";
import { useCityContext } from "../context/CityContext";
import Search from "../search/Search";
import CitiesData from "../../utils/city.list.json";
import SearchIcon from "@mui/icons-material/Search";

const ComparePlaces = () => {
    const { city, setCity } = useCityContext();
    return (
        <div className="">
            <div>Vychozi lokalita: {city}</div>
            <div className="">
                Najdete lokalitu pro porovnani:{" "}
                <div className="item search">
                    <input />
                    <SearchIcon />
                </div>
            </div>
        </div>
    );
};

export default ComparePlaces;
