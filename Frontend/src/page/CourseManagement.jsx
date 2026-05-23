import CourseHeader from "../components/CourseManagement/CourseHeader";

import { useDispatch, useSelector } from 'react-redux'
import { getCourses, getAllUsers } from "../features/auth/adminDashboardSlice";

function CourseManagement() {

    const { users, isLoading } = useSelector((state) => state.admin);

    return(
        <>
            <CourseHeader users={users} isLoading={isLoading}/>
        </>
    )
}

export default CourseManagement;