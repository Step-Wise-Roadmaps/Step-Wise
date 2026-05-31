import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// pages
import Hero from "./page/Hero";
import Login from "./page/Login";
import Register from "./page/Register";
import ForgotPassword from "./page/ForgotPassword";
import ResetPassword from "./page/ResetPassword";
import AdminDashboard from "./page/AdminDashboard";
import UserManagement from "./page/UserManagement";
import CourseManagement from "./page/CourseManagement"
import LessonManagement from "./page/LessonManagement";

// components
import AddCourse from "./components/CourseManagement/AddCourse";
import DeleteCourse from "./components/CourseManagement/DeleteCourse";
import CourseDele from "./components/CourseManagement/CourseDele";

import AddLesson from "./components/LessonManagement/AddLesson";
import DeleteLessonsCard from "./components/LessonManagement/DeleteLessonsCard";
import LessonDele from "./components/LessonManagement/LessonDele";

// layot
import AdminDashboardLayout from "./layout/AdminDashboardLayout";

// protected router
import ProtectedRoute from "./router/ProtectedRoute";

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

                <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                    <Route path="/admin-dashboard" element={<AdminDashboardLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="users" element={<UserManagement />} />
                        <Route path="course" element={<CourseManagement />} />
                        <Route path="add-course" element={<AddCourse />} />
                        <Route path="delete-course" element={<DeleteCourse />} />
                        <Route path="design/:id" element={<CourseDele />} />
                        <Route path="lesson" element={<LessonManagement />} />
                        <Route path="add-lesson" element={<AddLesson />} />
                        <Route path="delete-lesson" element={<DeleteLessonsCard />} />
                        <Route path="LessonsByCourseId/:id" element={<LessonDele />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App;