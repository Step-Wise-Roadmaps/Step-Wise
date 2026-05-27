import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getDesign, deleteCourse } from '../../features/auth/adminDashboardSlice';

import {
    Trash2,
    Sparkles,
    ArrowUpRight,
    Camera,
    Code,
    Component
} from "lucide-react";

function DeleteCourse() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { designs, courses, isLoading } = useSelector(
        (state) => state.admin
    );

    // useEffect(() => {
    //     dispatch(getDesign(1));
    // }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteCourse(id));
    };

    const stats = [
        {
            id: 1,
            title: "Stap-Wise Course Managment",
            value: "PhotoShop Course",
            icon: Camera,
            tone: "from-cyan-500 to-blue-500",
        },
        {
            id: 2,
            title: "Stap-Wise Course Managment",
            value: "Web Development Course",
            icon: Code,
            tone: "from-emerald-500 to-teal-500",
        },
        {
            id: 3,
            title: "Stap-Wise Course Managment",
            value: "UI/UX Design",
            icon: Component,
            tone: "bg-rose-500",
        },
    ];

    const handleCardClick = (id) => {
        dispatch(getDesign(id));

        // optional navigation
        navigate(`/admin-dashboard/design/${id}`);
    };

    return (
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

                <div className="mx-auto flex w-full max-w-8xl flex-col gap-6 p-4 pt-20 md:p-6 md:pt-6 lg:p-10">

                    <section className="grid gap-10 md:grid-cols-1 cursor-pointer">

                        {stats.map((stat) => {
                            const Icon = stat.icon;

                            return (
                                <article
                                    key={stat.id}
                                    onClick={() => handleCardClick(stat.id)}
                                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                                >

                                    <div className="flex items-start justify-between gap-4">

                                        <div>
                                            <p className="text-sm text-slate-500">
                                                {stat.title}
                                            </p>

                                            <h2 className="mt-3 roboto-bold text-3xl text-slate-900">
                                                {stat.value}
                                            </h2>
                                        </div>

                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.tone} text-white shadow-lg`}
                                        >
                                            <Icon size={22} />
                                        </div>

                                    </div>

                                    <div className="mt-5 flex items-center justify-between gap-3">

                                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                                            <ArrowUpRight size={14} />
                                            +12.5%
                                        </span>

                                    </div>

                                </article>
                            );
                        })}

                    </section>

                </div>

            </div>
        </>
    );
}

export default DeleteCourse;