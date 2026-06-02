import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ allowedRoles }) {
    const { user } = useSelector((state) => state.auth);
    const token = localStorage.getItem('token');
    
    if (!user || !token) {
        return <Navigate to="/login" replace />;
    }

    const userRole = user.role;

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;