import MainPage from "../../pages/MainPage";
import IRoute from "../interfaces/Routes";

const routes: IRoute[] = [
    {
        path: "/",
        exact: true,
        component: MainPage,
        name: "Home Page",
    },
];

export default routes;
