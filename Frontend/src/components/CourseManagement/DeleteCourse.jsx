import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDesign, deleteCourse } from '../../features/auth/adminDashboardSlice';

import { Trash2 } from "lucide-react";

function DeleteCourse() {
    const dispatch = useDispatch();

    const { designs, courses, isLoading } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(getDesign(1));
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteCourse(id));
    }

    return (
        <>
            <h1>Course</h1>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {designs?.map((item) => (
                        <div key={item.id}>
                            {item.course_name}

                            <div className='flex items-center text-rose-600 border border-transparent hover:border-rose-200 hover:bg-rose-50 px-3 py-2 cursor-pointer rounded-lg transition-all duration-300'>
                                <Trash2 size={20} />
                                <button onClick={() => {
                                handleDelete(item.id);
                                }}
                                className="cursor-pointer">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default DeleteCourse;