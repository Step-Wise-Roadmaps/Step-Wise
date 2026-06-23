
import sideBarLogo from "../../../assets/sideBarLogo/sideBarLogo.png";

import SidebarSection from "./SidebarSection"
import SidebarItem from "./SidebarItem"

import { menuSections, footerItems } from "../../../data/UserDashbourdData/UserSideBarData";

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

function SidebarContent({
    isOpen,
    activeItem,
    onItemClick,
    onCollapseToggle,
    onMobileClose,
    mobile = false,
    user,
}) {

    const fullName = user?.fullName || "Admin";
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

export default SidebarContent;