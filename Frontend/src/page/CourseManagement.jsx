import CourseHeader from "../components/CourseManagement/CourseHeader";
import CourseCard from "../components/CourseManagement/CourseCard";

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

    const itemRoutes = {
        AddCourse: "/admin-dashboard/add-course",
        DeleteCourse: "/admin-dashboard/delete-course"
    };

    const activeItem = Object.entries(itemRoutes).find(([, path]) => path === location.pathname)?.[0] ?? "";

    return(
        <>
            <CourseHeader users={users} courses={courses} skills={skills} isLoading={isLoading}/>
            <CourseCard  itemRoutes={itemRoutes}/>
        </>
    )
}

export default CourseManagement;