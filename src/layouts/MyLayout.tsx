import Menu from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";


const MyLayout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MyLayout;