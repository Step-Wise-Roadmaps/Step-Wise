import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/auth/adminDashboardSlice";

// components
import UsersHeader from "../components/UserManagement/UsersHeader";
import UsersTable from "../components/UserManagement/UsersTable";

function UserManagement() {
    const dispatch = useDispatch();

    const { users, isLoading } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    return(
        <>
            <UsersHeader />
            <UsersTable users={users} isLoading={isLoading} />
        </>
    )
}

export default UserManagement;