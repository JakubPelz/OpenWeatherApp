import React from "react";
import "./footer.scss";
import { useDarkModeContext } from "../context/darkModeContext";

const Footer = () => {
    const { setDarkMode } = useDarkModeContext();

    return (
        <div className="footerBar">
            Nelíbí se vám tato barva pozadí? Změnte si ho :)
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => setDarkMode(false)}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => setDarkMode(true)}
                ></div>
            </div>
        </div>
    );
};

export default Footer;
