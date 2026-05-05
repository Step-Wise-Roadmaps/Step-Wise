
import {
    Badge,
    BarChart3,
    BookOpen,
    icons,
    LayoutDashboard,
    LogOut,
    Package,
    Settings,
    Users,
    Video,
} from "lucide-react";

export const menuSections = [
    {
        title: "MAIN",
        items: [
            {id: "dashboard", label: "Dashboard", icon: LayoutDashboard, badge: "New"},
            {id: "dashboard", label: "Dashboard", icon: LayoutDashboard, badge: "New"},
            {id: "dashboard", label: "Dashboard", icon: LayoutDashboard, badge: "New"},
        ],

        title: "MANAGEMENT",
        items: [
            { id: "courses", label: "Courses", icon: BookOpen },
            { id: "lessons", label: "Lessons", icon: Video },
            { id: "analytics", label: "Analytics", icon: BarChart3 },
        ],
    }
];

export const footerItems = [
    { id: "settings", label: "Settings", icon: Settings },
    { id: "logout", label: "Logout", icon: LogOut, danger: true },
];

export const itemRoutes = {
    dashboard: "/admin-dashboard",
    users: "/admin-dashboard/users",
}