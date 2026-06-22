import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";
import { getMe } from "../features/auth/authSlice";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function AdminDashboardLayout() {
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    return (
        <>
        <div className="mb-200">
            <Navbar/>
            <div className="flex pt-20">
                <AdminSideBar variant="main" />
                <main className="flex-1 min-h-screen w-full bg-slate-50 text-slate-900">
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </div>
        </>
    );
}

export default AdminDashboardLayout;