
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesLessonsByCourcesId } from '../../features/auth/authSlice';

function LearningDashbourd() {

    const dispatch = useDispatch();

    const { lessonsWithCoursesId, isLoading } = useSelector((state) => state.auth);

    return(
        <>
            <h1>get lesson {lessonsWithCoursesId.lesson_name}</h1>
        </>
    )
}

export default LearningDashbourd;