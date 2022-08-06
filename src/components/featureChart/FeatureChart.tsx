import "./featureChart.scss";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useForecast } from "../context/ForecastContext";

const FeaturedChart = () => {
    const day: any = useForecast();

    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Detail předpovědi pro dnešek</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    {day === null ? (
                        <div>nenacteno</div>
                    ) : (
                        <img
                            src={`http://openweathermap.org/img/wn/${day.daily[0].weather[0].icon}@4x.png`}
                            alt="weather icon"
                            className="w-icon"
                        />
                    )}
                </div>
                <p className="title">Stupně</p>
                <p className="amount">18C</p>
                <p className="desc">
                    Jsou zde zapocteny vsechny ukoncene platby.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">DSrážky</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">%</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Vlhkost</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small" />
                            <div className="resultAmount">%</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Vítr</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small" />
                            <div className="resultAmount"> km/h</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedChart;
