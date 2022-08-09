import React, { useState, useEffect, useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useWeather2 } from '../../../context/WeatherContext2';
import ApiClient from '../../../../api/ApiClient';
import { useForecast2 } from '../../../context/ForecastContext2';

const Search = ({ CitiesData }: any) => {
    const [allCities, setAllCities] = useState<any>();
    const [filtredData, setFiltredData] = useState<any>();
    const [searchCity, setSearchCity] = useState('Vyhledejte město');
    const [findCity, setFindCity] = useState<string>('Praha');
    const { weather2, setWeather2 } = useWeather2();
    const { setForecast2 } = useForecast2();

    useEffect(() => {
        setAllCities(CitiesData);
    });

    useEffect(() => {
        ApiClient.getWeather(`${findCity}`)
            .then(({ data }) => {
                setWeather2(data);
            })
            .catch((error) => console.log(error));
    }, [findCity]);

    let longtitude = weather2 === null ? 14.42 : weather2.coord.lon;
    let latitude = weather2 === null ? 50.08 : weather2.coord.lat;

    const fetchData = useCallback(() => {
        ApiClient.getForecast(latitude, longtitude)
            .then(({ data }) => {
                setForecast2(data);
            })
            .catch((error) => console.log(error));
    }, [latitude, longtitude]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleFilter = (event: any) => {
        const searchValue = event.target.value;
        setSearchCity(searchValue);
        const newFilter = allCities.filter((value: any) => {
            return value.name.toLowerCase().includes(searchCity.toLowerCase());
        });
        if (newFilter === '') {
            setFiltredData([]);
        } else {
            setFiltredData(newFilter);
        }
    };

    const onSubmit = () => {
        if (filtredData.length >= 1) {
            setFindCity(filtredData[0].name);
        } else {
            setFindCity(filtredData.name);
        }
    };

    const onSubmitWhisperer = (data: string) => {
        setFindCity(data);
        onClear();
    };

    const onClear = () => {
        setFiltredData(undefined);
        setSearchCity('Vyhledejte město');
    };

    return (
        <div className="findWrapper">
            <div>
                <span className="mainCity">Srovnávané místo</span>
            </div>
            <div className="search">
                <input
                    type="text"
                    placeholder={searchCity}
                    onChange={handleFilter}
                />
                {filtredData === undefined ? (
                    <SearchIcon onClick={onSubmit} className="searchIcon" />
                ) : (
                    <HighlightOffIcon
                        onClick={onClear}
                        className="searchIcon"
                    />
                )}
                {filtredData === undefined ? (
                    <></>
                ) : (
                    <div className="dataResult">
                        {filtredData
                            .slice(0, 15)
                            .map((value: any, key: any) => {
                                return (
                                    <p
                                        className="dataItem"
                                        key={key}
                                        onClick={() => {
                                            onSubmitWhisperer(value.name);
                                        }}
                                    >
                                        {value.name}
                                    </p>
                                );
                            })}
                    </div>
                )}
            </div>
            <div className="items">
                <div className="item">
                    <div className="item">
                        <MyLocationIcon className="icon" />
                        {weather2?.name}
                    </div>
                    <div className="item">
                        <LanguageIcon className="icon" />
                        {weather2?.sys.country}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
