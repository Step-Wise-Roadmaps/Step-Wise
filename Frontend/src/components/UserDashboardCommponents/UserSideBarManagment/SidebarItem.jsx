import React from 'react';

function SidebarItem({ label, icon: Icon, onClick, danger }) {
    return (
        <button 
            onClick={onClick}
            className={`flex items-center gap-3 w-full p-3 rounded-lg text-left transition-colors
                ${danger ? 'text-red-500 hover:bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`}
        >
            {Icon && <Icon size={20} />} 
            <span className="text-sm font-medium">{label}</span>
        </button>
    );
}

export default SidebarItem;