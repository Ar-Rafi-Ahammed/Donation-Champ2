import { Outlet } from "react-router-dom";
import Nav from "../ComponentAll/Header/Nav/Nav";



const MainLayout = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <Nav></Nav>
            <div className="py-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;