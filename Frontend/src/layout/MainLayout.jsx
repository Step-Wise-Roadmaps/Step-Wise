import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {

    return(
        <>
            <Navbar variant="main"/>
                <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout;