import { logout } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // 1. useNavigate አመጣን
import { useState } from "react";

function UserDashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleItemClick = (actionType) => {
        if (actionType === "logout") {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            
            dispatch(logout());
            navigate("/");
        }
    };

    return (
        <>
            <h1>gooo</h1>
            <button 
                onClick={() => handleItemClick("logout")} 
                className="p-4 bg-red-900 text-white rounded"
            >
                logout
            </button>
        </>
    );
}

export default UserDashboard;