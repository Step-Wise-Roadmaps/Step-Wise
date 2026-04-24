import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import sideBarLogo from "../assets/sideBarLogo/sideBarLogo.png";
import { getMe } from "../features/auth/authSlice";
import {
    BarChart3,
    BookOpen,
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    LogOut,
    Menu,
    Package,
    Settings,
    Users,
    Video,
    X,
} from "lucide-react";

const menuSections = [
    {
        title: "MAIN",
        items: [
            { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, badge: "New" },
            { id: "users", label: "Users", icon: Users, badge: "24" },
            { id: "products", label: "Products", icon: Package },
        ],
    },
    {
        title: "MANAGEMENT",
        items: [
            { id: "courses", label: "Courses", icon: BookOpen },
            { id: "lessons", label: "Lessons", icon: Video },
            { id: "analytics", label: "Analytics", icon: BarChart3 },
        ],
    },
];

const footerItems = [
    { id: "settings", label: "Settings", icon: Settings },
    { id: "logout", label: "Logout", icon: LogOut, danger: true },
];

const itemRoutes = {
    dashboard: "/AdminDashboard",
    users: "/AdminGetUsers",
};

function SidebarItem({ item, isOpen, isActive, onClick }) {
    const Icon = item.icon;

    return (
        <button
            type="button"
            onClick={() => onClick(item.id)}
            className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border px-3 py-3 text-left transition-all duration-300 ${
                isActive
                    ? "border-cyan-200 bg-cyan-100 text-cyan-700 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    : item.danger
                      ? "border-transparent text-rose-500 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                      : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-900"
            } ${isOpen ? "justify-start" : "justify-center"}`}
            aria-label={item.label}
        >
            {isActive && (
                <span className="absolute bottom-2 left-0 top-2 w-1 rounded-r-full bg-cyan-400" />
            )}

            <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                    isActive
                        ? "border-cyan-200 bg-cyan-100 text-cyan-600"
                        : item.danger
                          ? "border-slate-200 bg-slate-100 text-rose-500"
                          : "border-slate-200 bg-slate-100 text-slate-600"
                }`}
            >
                <Icon size={18} />
            </span>

            <div
                className={`flex min-w-0 flex-1 items-center justify-between transition-all duration-300 ${
                    isOpen ? "translate-x-0 opacity-100" : "pointer-events-none w-0 translate-x-2 opacity-0"
                }`}
            >
                <span className="roboto-medium truncate text-[15px]">{item.label}</span>
                {item.badge && (
                    <span
                        className={`ml-3 rounded-full px-2 py-1 text-[11px] roboto-medium ${
                            isActive ? "bg-cyan-200 text-cyan-700" : "bg-slate-200 text-slate-600"
                        }`}
                    >
                        {item.badge}
                    </span>
                )}
            </div>

            {!isOpen && (
                <span className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                    {item.label}
                </span>
            )}
        </button>
    );
}

function SidebarSection({ title, items, isOpen, activeItem, onItemClick }) {
    return (
        <div className="space-y-3">
            <div
                className={`px-2 transition-all duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`}
            >
                <p className="roboto-medium text-[11px] tracking-[0.24em] text-slate-500">{title}</p>
            </div>

            <div className="space-y-2">
                {items.map((item) => (
                    <SidebarItem
                        key={item.id}
                        item={item}
                        isOpen={isOpen}
                        isActive={activeItem === item.id}
                        onClick={onItemClick}
                    />
                ))}
            </div>
        </div>
    );
}

function SidebarContent({
    isOpen,
    activeItem,
    onItemClick,
    onCollapseToggle,
    onMobileClose,
    mobile = false,
    user,
}) {
    const fullName = user?.full_name || "Admin";
    const initials = fullName
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((name) => name[0]?.toUpperCase())
        .join("") || "AD";

    return (
        <aside
            className={`relative flex h-full flex-col overflow-hidden rounded-none border-r border-slate-200 bg-white text-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.05)] ${
                isOpen ? "w-72" : "w-24"
            } transition-all duration-300 ease-out`}
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-100 via-blue-50 to-transparent" />
                <div className="absolute -left-20 top-28 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />
                <div className="absolute bottom-20 right-0 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl" />
            </div>

            <div className="relative z-10 flex h-full flex-col p-4">
                <div className={`mb-6 flex items-center ${isOpen ? "justify-between" : "justify-center"} gap-3`}>
                    <div className={`flex min-w-0 items-center gap-3 ${isOpen ? "" : "justify-center"}`}>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 shadow">
                            <img src={sideBarLogo} alt="StepWise logo" className="h-8 w-8 object-contain" />
                        </div>

                        <div
                            className={`min-w-0 overflow-hidden transition-all duration-300 ${
                                isOpen ? "max-w-[180px] opacity-100" : "max-w-0 opacity-0"
                            }`}
                        >
                            <p className="roboto-light text-[11px] uppercase tracking-[0.28em] text-slate-500">
                                Workspace
                            </p>
                            <h1 className="roboto-bold truncate text-lg text-slate-800">StepWise Admin</h1>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={mobile ? onMobileClose : onCollapseToggle}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
                    >
                        {mobile ? <X size={18} /> : isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                    </button>
                </div>

                <div className="mb-6 h-px bg-slate-200" />

                <div className="flex-1 space-y-6 overflow-y-auto">
                    {menuSections.map((section) => (
                        <SidebarSection
                            key={section.title}
                            title={section.title}
                            items={section.items}
                            isOpen={isOpen}
                            activeItem={activeItem}
                            onItemClick={onItemClick}
                        />
                    ))}
                </div>

                <div className="mt-6 h-px bg-slate-200" />

                <div className="mt-6 space-y-2">
                    {footerItems.map((item) => (
                        <SidebarItem
                            key={item.id}
                            item={item}
                            isOpen={isOpen}
                            isActive={activeItem === item.id}
                            onClick={onItemClick}
                        />
                    ))}
                </div>

                <div
                    className={`mt-6 rounded-2xl border border-slate-200 bg-slate-100 p-3 shadow-inner ${
                        isOpen ? "opacity-100" : "px-2"
                    }`}
                >
                    <div className={`flex items-center ${isOpen ? "gap-3" : "justify-center"}`}>
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-sm roboto-bold text-white">
                            {initials}
                        </div>

                        <div
                            className={`min-w-0 overflow-hidden transition-all duration-300 ${
                                isOpen ? "max-w-[160px] opacity-100" : "max-w-0 opacity-0"
                            }`}
                        >
                            <p className="roboto-medium truncate text-sm text-slate-800">{fullName}</p>
                            <p className="roboto-light truncate text-xs text-slate-500">Platform Owner</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

function AdminSideBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(true);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    const activeItem = Object.entries(itemRoutes).find(([, path]) => path === location.pathname)?.[0] ?? "";

    const handleItemClick = (itemId) => {
        if (itemId === "logout") {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            navigate("/");
            setIsMobileOpen(false);
            return;
        }

        const route = itemRoutes[itemId];

        if (route) {
            navigate(route);
        }

        setIsMobileOpen(false);
    };

    return (
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

            <div
                className={`fixed inset-0 z-50 md:hidden ${
                    isMobileOpen ? "pointer-events-auto backdrop-blur-sm" : "pointer-events-none"
                }`}>

                <div
                    className={`h-full max-w-[86vw] transition-transform duration-300 ease-out ${
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
                    className="absolute inset-0 -z-10"
                />
            </div>
        </>
    );
}

export default AdminSideBar;
