import axios from "axios";
import { getWeatherPath, getForecastPath } from "../utils/pathHelper";

const firstApiKey = "97ae7c3298cb9f01ea017f077389b116";
/* const secondApiKey = "01ee1c02a5f0d8f2e86d86a0ee732df8"; */

const ApiClient = {
    getWeather: async (city: string) =>
        axios.get(getWeatherPath(city, firstApiKey)),
    getForecast: async (latitude: number, lontitude: number) =>
        axios.get(getForecastPath(latitude, lontitude, firstApiKey)),
};

export default ApiClient;
