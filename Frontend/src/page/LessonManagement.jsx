
// backend data
import { useDispatch, useSelector } from 'react-redux';
import { getCourses, getLessons } from '../features/auth/adminDashboardSlice'

// components
import LessonHeader from "../components/LessonManagement/LessonHeader";
import LessonCard from '../components/LessonManagement/LessonCard';

// data
import { stats } from '../data/LessonManagementData';

function LessonManagement() {

    const dispatch = useDispatch();

    const { courses, lessons, isLoading } = useSelector((stats) => stats.admin);

    return(
        <>
            <LessonHeader courses={courses} lessons={lessons} isLoading={isLoading} />
        </>
    )
}

export default LessonManagement;