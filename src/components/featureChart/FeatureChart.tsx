import './featureChart.scss';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
/* import { CircularProgressbar } from "react-circular-progressbar"; */
/* import 'react-circular-progressbar/dist/styles.css'; */
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FeaturedChart = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Prodeje</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    {/*  <CircularProgressbar
                        value={70}
                        text={"70%"}
                        strokeWidth={5}
                    /> */}
                </div>
                <p className="title">Dnes prodano</p>
                <p className="amount">$899</p>
                <p className="desc">
                    Jsou zde zapocteny vsechny ukoncene platby.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Dnesni cil</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">$ 12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Minuly tyden</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small" />
                            <div className="resultAmount">$ 12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Minuly mesic</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small" />
                            <div className="resultAmount">$ 12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedChart;
