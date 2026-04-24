import AdminSideBar from "../components/AdminSideBar";
import { Outlet } from "react-router-dom";

function AdminDashboardLayout() {

    return(
        <>
            <div className="flex">
                <AdminSideBar variant="main"/>
                    <Outlet />
            </div>
        </>
    )
}

export default AdminDashboardLayout;