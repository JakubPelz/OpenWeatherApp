import { createContext, useContext } from "react";

export type TypeDarkModeContext = {
    darkMode: boolean;
    setDarkMode: (d: boolean) => void;
};

export const getDarkModeContext = createContext<TypeDarkModeContext>({
    darkMode: false,
    setDarkMode: () => {},
});

export const useDarkModeContext = () => useContext(getDarkModeContext);
