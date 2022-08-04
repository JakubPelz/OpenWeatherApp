import { createContext, useContext } from "react";

export type CityContext = {
    city: string;
    setCity: (c: string) => void;
};

export const getCityContext = createContext<CityContext>({
    city: "Olomouc",
    setCity: () => {},
});

export const useCityContext = () => useContext(getCityContext);
