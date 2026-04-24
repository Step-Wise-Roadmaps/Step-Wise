import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// pages
import Hero from "./page/Hero";
import Login from "./page/Login";
import Register from "./page/Register";
import ForgotPassword from "./page/ForgotPassword";
import ResetPassword from "./page/ResetPassword";
import AdminDashboard from "./page/AdminDashboard";
import AllUsers from "./page/AllUsers";

// layot
import AdminDashboardLayout from "./layout/AdminDashboardLayout";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Hero />} />
                </Route>
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />

                <Route path="/admin-dashboard" element={<AdminDashboardLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="users" element={<AllUsers />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;