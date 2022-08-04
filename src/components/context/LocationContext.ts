import { createContext, useContext } from "react";

export const LocationContext = createContext<any>(null);

export const useLocationContext = () => useContext<any>(LocationContext);
