import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoursesLessonsByCourcesId } from '../../features/auth/authSlice';

function LessonSideBar() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { lessonsWithCoursesId, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {
        if (id) {
            dispatch(getCoursesLessonsByCourcesId(id));
        }
    }, [dispatch, id]);

    if (isLoading) return <h1>running...</h1>;

    return (
        <>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Lessons:</h1>
                
                {lessonsWithCoursesId && lessonsWithCoursesId.length > 0 ? (
                    <div className="space-y-4">
                        {lessonsWithCoursesId.map((lesson, idx) => (
                            <div key={idx} className="p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
                                <h3 className="font-semibold text-lg text-slate-800">
                                    Lesson {idx + 1}: {lesson.lesson_name}
                                </h3>
                                <p className="text-slate-500">Courses: {lesson.course_name}</p>
                                {lesson.video_url && (
                                    <p className="text-blue-600 mt-2">Video url: {lesson.video_url}</p>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-red-500 font-medium">dont get cources</p>
                )}
            </div>
        </>
    );
}

export default LessonSideBar;