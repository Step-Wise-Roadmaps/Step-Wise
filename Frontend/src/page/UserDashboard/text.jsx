import { menuSections, footerItems } from "../../data/UserDashbourdData/UserSideBarData";
import SidebarItem from "../../components/UserDashboardCommponents/UserSideBarManagment/SidebarItem";
import { logout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserSideBar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleItemClick = (id) => {
        if (id === "logout") {
            dispatch(logout());
            navigate("/");
        }
    }
    return (
        <aside className="w-64 h-screen bg-white border-r flex flex-col justify-between p-4">
            <div className="space-y-6">
                {menuSections.map((section, index) => (
                    <div key={index} className="space-y-2">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3">
                            {section.title}
                        </h4>
                        
                        <div className="space-y-1">
                            {section.items.map((item) => (
                                <SidebarItem 
                                    key={item.id}
                                    label={item.label}
                                    icon={item.icon}
                                    onClick={() => handleItemClick(item.id)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t pt-4 space-y-1">
                {footerItems.map((item) => (
                    <SidebarItem 
                        key={item.id}
                        label={item.label}
                        icon={item.icon}
                        danger={item.danger}
                        onClick={() => handleItemClick(item.id)}
                    />
                ))}
            </div>
        </aside>
    );
}

export default UserSideBar;