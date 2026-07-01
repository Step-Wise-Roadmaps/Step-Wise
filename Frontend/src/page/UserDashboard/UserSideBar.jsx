
import { menuSections, footerItems } from "../../data/UserDashbourdData/UserSideBarData";

import SidebarContent from "../../components/UserDashboardCommponents/UserSideBarManagment/SidebarContent";

import { logout } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Menu } from "lucide-react";

const itemRoutes = {
    dashboard: "/user-dashboard",
    users: "/user-dashboard/users",
    analytics: "/user-dashboard/analytics",
    courses: "/user-dashboard/user-courses",
    settings: "/user-dashboard/settings"
};


function UserSideBar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(true);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'));

    const activeItem = Object.entries(itemRoutes).find(([, path]) => path === location.pathname)?.[0] ?? "";

    const handleItemClick = (itemId) => {
        if (itemId === "logout") {
            dispatch(logout());
            navigate("/");
            setIsMobileOpen(false)
            return;
        }

        const route = itemRoutes[itemId];

        if (route) {
            navigate(route);
        }
        
        setIsMobileOpen(false);
    }

    return(
        <>
            <button
                type="button"
                onClick={() => setIsMobileOpen(true)}
                className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-lg md:hidden"
            >
                <Menu size={18} />
            </button>

            <div className="hidden md:block">
                <SidebarContent
                    isOpen={isOpen}
                    activeItem={activeItem}
                    onItemClick={handleItemClick}
                    onCollapseToggle={() => setIsOpen((prev) => !prev)}
                    user={user}
                />
            </div>

            <div className={`fixed inset-0 z-50 md:hidden ${
                isMobileOpen ? "pointer-events-auto backdrop-blur-sm" : "pointer-events-none"
                }`}>

                <div className={`h-full max-w-[86vw] transition-transform duration-300 ease-out ${
                        isMobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}>
                        
                    <SidebarContent
                        isOpen
                        activeItem={activeItem}
                        onItemClick={handleItemClick}
                        onMobileClose={() => setIsMobileOpen(false)}
                        mobile
                        user={user}
                    />
                </div>

                <button
                    type="button"
                    onClick={() => setIsMobileOpen(false)}
                    className="absolute inset-0 z-10"
                />
            </div>
        </>
    )
}

export default UserSideBar;