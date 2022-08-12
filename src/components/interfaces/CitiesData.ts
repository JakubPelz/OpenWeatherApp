export interface ICityData {
    id: number;
    name: string;
    state: string;
    country: string;
    coord: {
        lon: number;
        lat: number;
    };
}

export interface ICitiesArray extends Array<ICityData> {}
