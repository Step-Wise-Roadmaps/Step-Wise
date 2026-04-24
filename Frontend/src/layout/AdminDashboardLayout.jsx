import AdminSideBar from "../components/AdminSideBar";
import { Outlet } from "react-router-dom";

function AdminDashboardLayout() {

    return(
        <>
            <AdminSideBar variant="main"/>
                <Outlet />
        </>
    )
}

export default AdminDashboardLayout;