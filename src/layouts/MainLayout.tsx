import {Outlet} from "react-router-dom";
import {Header} from "../components";
import "../components/Style/MainStyle.css"

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};