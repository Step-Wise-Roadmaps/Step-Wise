import CourseHeader from "../components/CourseManagement/CourseHeader";

import { useDispatch, useSelector } from 'react-redux'
import { getCourses, getAllUsers, getSkills } from "../features/auth/adminDashboardSlice";
import { useEffect } from "react";

function CourseManagement() {

    const { users, courses, skills, isLoading } = useSelector((state) => state.admin);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getCourses());
        dispatch(getSkills());
    }, [dispatch]);

    return(
        <>
            <CourseHeader users={users} courses={courses} skills={skills} isLoading={isLoading}/>
        </>
    )
}

export default CourseManagement;