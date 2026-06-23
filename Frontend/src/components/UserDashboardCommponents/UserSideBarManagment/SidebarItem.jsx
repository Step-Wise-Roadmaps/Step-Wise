import React from 'react';

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

export default SidebarItem;