import { createContext, useContext } from "react";

export type TypeCityContext = {
    city: string;
    setCity: (d: string) => void;
};

export const getCityContext = createContext<TypeCityContext>(
    {} as TypeCityContext
);

export const useCityContext = () => useContext(getCityContext);
