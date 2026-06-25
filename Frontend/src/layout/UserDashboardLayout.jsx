import { Outlet, useNavigate } from "react-router-dom";

// page
import UserSideBar from "../page/UserDashboard/UserSideBar";
import Footer from "../components/Footer";

function UserDashboardLayout() {
    return (
        <div className="flex">
            <UserSideBar variant="main" />
            
            <main className="flex-1 min-h-screen w-full bg-slate-50 text-slate-900">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 pt-20 md:p-6 md:pt-6 lg:p-8">
                    <Outlet />
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default UserDashboardLayout;