import "./MainPage.scss";
import React from "react";
import NavBar from "../components/navbar/NavBar";
import WidgetForecast from "../components/widgetForecast/WidgetForecast";
import Chart from "../components/chart/Chart";
import FeatureChart from "../components/featureChart/FeatureChart";
import ComparePlaces from "../components/comparePlaces/ComparePlaces";
import Footer from "../components/footer/Footer";
import "../components/style/dark.scss";
import { useDarkModeContext } from "../components/context/DarkModeContext";
import TableData from "../components/tableData/TableData";

const MainPage = () => {
    const { darkMode } = useDarkModeContext();
    return (
        <div className={darkMode === false ? "mainPage" : "mainPage dark"}>
            <div className="mainContainer">
                <NavBar />
                <WidgetForecast />
                <div className="charts">
                    <FeatureChart />
                    <Chart />
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Porovnejte teploty mezi dvěma místy
                    </div>
                    <ComparePlaces />
                    <TableData />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
