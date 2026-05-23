import CourseHeader from "../components/CourseManagement/CourseHeader";

import { useDispatch, useSelector } from 'react-redux'
import { getCourses, getAllUsers } from "../features/auth/adminDashboardSlice";

function CourseManagement() {

    const { users, courses, skills, isLoading } = useSelector((state) => state.admin);

    return(
        <>
            <CourseHeader users={users} courses={courses} skills={skills} isLoading={isLoading}/>
        </>
    )
}

export default CourseManagement;