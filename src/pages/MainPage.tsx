import './MainPage.scss';
import React from 'react';
import NavBar from '../components/navbar/NavBar';
import WidgetForecast from '../components/widgetForecast/WidgetForecast';
import Chart from '../components/chart/Chart';
import FeatureChart from '../components/featureChart/FeatureCHart';

const MainPage = () => {
    return (
        <div className="mainPage">
            <div className="mainContainer">
                <NavBar />
                <WidgetForecast />
                <div className="charts">
                    <FeaturedChart />
                    <Chart />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
