import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useCityContext } from "../context/CityContext";
import "./search.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ICityData } from "../interfaces/CitiesData";

const Search = ({ CitiesData }: any) => {
    const [allCities, setAllCities] = useState<any>();
    const [filtredData, setFiltredData] = useState<any>();
    const [searchCity, setSearchCity] = useState("Vyhledejte město");
    const { setCity } = useCityContext();

    useEffect(() => {
        setAllCities(CitiesData);
    }, [CitiesData]);

    const handleFilter = (event: any) => {
        const searchValue = event.target.value;
        setSearchCity(searchValue);
        const newFilter = allCities.filter((value: any) => {
            return value.name.toLowerCase().includes(searchCity.toLowerCase());
        });
        if (newFilter === "") {
            setFiltredData([]);
        } else {
            setFiltredData(newFilter);
        }
    };

    const onSubmit = () => {
        if (filtredData.length >= 1) {
            setCity(filtredData[0].name);
        } else setCity(filtredData.name);
    };

    const onSubmitWhisperer = (data: string) => {
        setCity(data);
        onClear();
    };

    const onClear = () => {
        setFiltredData(undefined);
        setSearchCity("Vyhledejte město");
    };

    return (
        <div className="item search">
            <input
                type="text"
                placeholder={searchCity}
                onChange={handleFilter}
            />
            {filtredData === undefined ? (
                <SearchIcon onClick={onSubmit} className="searchIcon" />
            ) : (
                <HighlightOffIcon onClick={onClear} className="searchIcon" />
            )}
            {filtredData === undefined ? (
                <></>
            ) : (
                <div className="dataResult">
                    {filtredData
                        .slice(0, 15)
                        .map((value: ICityData, key: number) => {
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
    );
};

export default Search;
