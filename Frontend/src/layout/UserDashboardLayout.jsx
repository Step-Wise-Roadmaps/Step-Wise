import { Outlet, useNavigate } from "react-router-dom";

// page
import UserSideBar from "../page/UserDashboard/UserSideBar";
import Footer from "../components/Footer";

function UserDashboardLayout() {
    return (
        <div className="flex">
            <UserSideBar variant="main" />
            
            <main className="flex-1 min-h-screen w-full bg-slate-50 text-slate-900">
                <Outlet />
                <Footer />
            </main>
        </div>
    );
}

export default UserDashboardLayout;