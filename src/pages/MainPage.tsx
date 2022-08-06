import "./MainPage.scss";
import React from "react";
import NavBar from "../components/navbar/NavBar";
import WidgetForecast from "../components/widgetForecast/WidgetForecast";
import Chart from "../components/chart/Chart";
import FeatureChart from "../components/featureChart/FeatureChart";

const MainPage = () => {
    return (
        <div className="mainPage">
            <div className="mainContainer">
                <NavBar />
                <WidgetForecast />
                <div className="charts">
                    <FeatureChart />
                    <Chart />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
