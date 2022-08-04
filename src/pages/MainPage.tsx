import "./MainPage.scss";
import React from "react";
import NavBar from "../components/navbar/NavBar";
import WidgetForecast from "../components/widgetForecast/WidgetForecast";
/* import { useCityContext } from "../components/context/CityContext";
{city} <button onClick={() => setCity("Praha")}>Click me</button>
const { city, setCity } = useCityContext(); */

const MainPage = () => {
    return (
        <div className="mainPage">
            <div className="mainContainer">
                <NavBar />
                <div className="widgets">
                    <WidgetForecast />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
