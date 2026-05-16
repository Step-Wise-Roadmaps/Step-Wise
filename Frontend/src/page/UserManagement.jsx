import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../features/auth/adminDashboardSlice";

// components
import UsersHeader from "../components/UserManagement/UsersHeader";
import UsersTable from "../components/UserManagement/UsersTable";
import { stats } from "../data/UserManagementData";

function UserManagement() {
    const dispatch = useDispatch();

    const { users, isLoading } = useSelector((state) => state.admin);

    const [search, setSearch] = useState("");

    const filteredUsers = users?.filter((user) =>
        user.full_name?.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };
    return(
        <>
            <UsersHeader users={users} isLoading={isLoading} />

            <UsersTable 
                users={filteredUsers} 
                isLoading={isLoading} 
                deleteUser={handleDelete}
                search={search}
                setSearch={setSearch}
            />
        </>
    )
}

export default UserManagement;