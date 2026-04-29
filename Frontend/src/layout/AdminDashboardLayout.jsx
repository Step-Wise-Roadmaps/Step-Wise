import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";
import { getMe } from "../features/auth/authSlice";

function AdminDashboardLayout() {
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    return (
        <div className="flex">
            <AdminSideBar variant="main" />
            <main className="flex-1 min-h-screen w-full bg-slate-50 text-slate-900">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminDashboardLayout;