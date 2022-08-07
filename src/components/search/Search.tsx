import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CitiesData from '../../utils/state.capitals.json';

export interface ICity {
    abbr: string;
    capital: string;
    lat: string;
    long: string;
    name: string;
}

interface ICities extends Array<ICity> {}

const Search = () => {
    const [searchCity, setSearchCity] = useState<ICities>();
    const [wordEntered, setWordEntered] = useState<string>('');

    useEffect(() => {
        setSearchCity(CitiesData);
    });

    /*     const handleFilter = (event: any) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value: any) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === '') {
            setFiltredData([]);
        } else {
            setFiltredData(newFilter);
            setWordEntered(searchWord);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(getWeather(wordEntered));
    };

    const clearInput = () => {
        setFiltredData([]);
        setWordEntered('');
    }; */
    return (
        <div className="item search">
            <input type="text" placeholder="Vyhledej město" />
            <SearchIcon />
        </div>
    );
};

export default Search;
