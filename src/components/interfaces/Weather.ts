export default interface IWeather {
    base: string;
    clouds: {};
    cod: number;
    coord: { lat: number; lon: number };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: [{ desciption: string; icon: string; id: number; main: string }];
    wind: {
        deg: number;
        gust: number;
        speed: number;
    };
}
