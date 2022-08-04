export const getWeatherPath = (city: string, secondApiKey: string) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=hourly,daily&appid=${secondApiKey}`;
};

export const getForecastPath = (
    latitude: number,
    lontitude: number,
    secondApiKey: string
) => {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${lontitude}&exclude=hourly,minutely,alerts&units=metric&appid=${secondApiKey}`;
};
