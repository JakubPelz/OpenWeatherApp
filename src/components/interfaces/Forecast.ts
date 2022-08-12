export default interface IForecast {
    current: {
        clouds: number;
        dew_point: number;
        dt: number;
        feels_like: number;
        humidity: number;
        pressure: number;
        sunrise: number;
        sunset: number;
        temp: number;
        uvi: number;
        visibility: number;
        weather: {
            description: string;
            icon: string;
            id: number;
            main: string;
        };
        wind_deg: number;
        wind_gust: number;
        wind_speed: number;
    };
    daily: {
        clouds: number;
        dew_point: number;
        dt: number;
        feels_like: {
            day: number;
            night: number;
            eve: number;
            morn: number;
        };
        humidity: number;
        moon_phase: number;
        moonrise: number;
        moonset: number;
        pop: number;
        pressure: number;
        sunrise: number;
        sunset: number;
        temp: {
            day: number;
            eve: number;
            max: number;
            min: number;
            morn: number;
            night: number;
        };
        uvi: number;
        weather: {
            description: string;
            icon: string;
            id: string;
            main: string;
        }[];
        wind_deg: number;
        wind_gust: number;
        wind_speed: number;
    }[];

    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
}

export interface IForecastDaily {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
    };
    humidity: number;
    moon_phase: number;
    moonrise: number;
    moonset: number;
    pop: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: {
        day: number;
        eve: number;
        max: number;
        min: number;
        morn: number;
        night: number;
    };
    uvi: number;
    weather: { description: string; icon: string; id: string; main: string }[];
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
}
