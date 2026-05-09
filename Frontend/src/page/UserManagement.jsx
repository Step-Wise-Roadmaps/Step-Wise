import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../features/auth/adminDashboardSlice";

// components
import UsersHeader from "../components/UserManagement/UsersHeader";
import UsersTable from "../components/UserManagement/UsersTable";

function UserManagement() {
    const dispatch = useDispatch();

    const { users, isLoading } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return(
        <>
            <UsersHeader users={users} isLoading={isLoading}/>
            <UsersTable users={users} isLoading={isLoading} deleteUser={handleDelete} />
        </>
    )
}

export default UserManagement;