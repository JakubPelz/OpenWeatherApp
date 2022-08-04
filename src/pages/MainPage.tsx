import './MainPage.scss';
import React from 'react';
import NavBar from '../components/navbar/NavBar';

/* import { useCityContext } from "../components/context/CityContext";
{city} <button onClick={() => setCity("Praha")}>Click me</button>
const { city, setCity } = useCityContext(); */

const MainPage = () => {
    return (
        <div className="mainPage">
            <div className="mainContainer">
                <NavBar />
                <div className="widgets">
                    <div>Main Content</div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
