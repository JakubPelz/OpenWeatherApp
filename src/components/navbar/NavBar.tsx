import './navbar.scss';
import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PinDropIcon from '@mui/icons-material/PinDrop';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div>
                    <span className="logo">Logo Appky</span>
                </div>
                <div className="items">
                    <div className="item search">
                        <input type="text" placeholder="Vyhledej město" />
                        <SearchIcon />
                    </div>
                    <div className="item">
                        <PinDropIcon className="icon" />
                        Zjistit polohu
                    </div>
                </div>
                <div className="items">
                    <div className="item">
                        <div className="item">
                            <MyLocationIcon className="icon" />
                            Lokace
                        </div>
                        <div className="item">
                            <LanguageIcon className="icon" />
                            Czech
                        </div>
                        <div className="item">
                            <QueryBuilderIcon className="icon" />
                            Čas
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
