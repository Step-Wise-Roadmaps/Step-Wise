
import { Sparkles, Camera, Trash2 } from 'lucide-react';

import { useDispatch, useSelector } from 'react-redux';
import { getLessonsByCourseId, deleteLesson, reset } from "../../features/auth/adminDashboardSlice"

function LessonDele() {

    const dispatch = useDispatch();

    const { LessonsByCourseId, isLoading, message, isError } = useSelector((state) => state.admin);

    const handleDelete = (id) => {
        dispatch(deleteLesson(id));
    };

    return(
        <>
            <div className='mx-auto flex w-full max-w-8xl flex-col gap-6 p-4 pt-20 md:p-6 md:pt-6 lg:p-8'>
                <section className='relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-8'>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.10),_transparent_28%)]" />
                    <div className='relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
                        <div className='max-w-2xl space-y-4'>

                            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm text-cyan-700">
                                <Sparkles size={16} />
                                All Course Management Page
                            </div>

                            <div className='space-y-5'>
                                <h1 className='roboto-bold text-2xl leading-tight text-slate-900 md:text-3xl'>
                                    User Management Stap-Wise Course
                                </h1>
                            </div>

                        </div>
                    </div>
                </section>
                <div className='relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-8 mt-10 flex-col gap-6 p-4 md:p-6 md:pt-6 lg:p-8 max-w-8xl flex w-full bg-white'>
                    <>
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm text-slate-500">
                                    Delete Courses
                                </p>

                                <h2 className="mt-3 roboto-bold text-3xl text-slate-900">
                                    {LessonsByCourseId && LessonsByCourseId.length > 0 ? LessonsByCourseId[0].course_name : "Loading Course..."}
                                </h2>
                            </div>

                            <div
                                className={`flex h-12 w-12 items-center justify-center from-cyan-500 to-blue-500 rounded-2xl bg-gradient-to-br text-white shadow-lg`}>
                                <Camera />
                            </div>

                        </div>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            <div>
                                {LessonsByCourseId?.map((item) =>(
                                    <div key={item.id} className='w-full flex justify-between'>
                                    <h1 className='text-slate-500 roboto-medium text-md p-5'>{item.lesson_name}</h1>
                                    <div className='flex right-1 items-center text-rose-600 border border-transparent hover:border-rose-200 hover:bg-rose-50 px-3 py-2 cursor-pointer rounded-lg transition-all duration-300'>
                                        <Trash2 size={20} />
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                ))}
                            </div>
                        )}

                    </>
                </div>
            </div>
        </>
    )
}

export default LessonDele;