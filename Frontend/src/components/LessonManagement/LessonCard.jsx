

import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import {
    Activity,
    ArrowUpRight,
    BookOpen,
    CircleCheckBig,
    Clock3,
    FileText,
    GraduationCap,
    Layers3,
    ShieldCheck,
    Sparkles,
    Users,
    Trash2
} from "lucide-react";

function LessonCard({ itemRoutes }) {

    const navigate = useNavigate();

    const stats = [
        {
            id: "AddLessons",
            title: "Stap-Wise Lessons Managment",
            value: "Add Lessons",
            change: "+12.5%",
            note: "New Course this month",
            icon: BookOpen,
            tone: "from-cyan-500 to-blue-500",
        },
        {
            id: "DeleteLessons",
            title: "Stap-Wise Lessons Managment",
            value: "Delete Lessons",
            // note: "Published and visible",
            icon: Trash2,
            tone: "bg-rose-500",
        },
    ];

    return(
        <>
            <div className="mx-auto flex w-full max-w-8xl flex-col gap-6 p-4 pt-20 md:p-6 md:pt-6 lg:p-10">
                <section className="grid gap-10 md:grid-cols-1 cursor-pointer">
                        {stats.map((stat) => {
                            const Icon = stat.icon;

                            return (
                                <article
                                    key={stat.id}
                                    onClick={() => navigate(itemRoutes[stat.id])}
                                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">

                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-sm text-slate-500">{stat.title}</p>
                                            <h2 className="mt-3 roboto-bold text-3xl text-slate-900">{stat.value}</h2>
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
                                            {stat.change}
                                        </span>
                                        <p className="text-xs text-slate-500">{stat.note}</p>
                                    </div>
                                </article>
                            );
                        })}
                </section>
            </div>
        </>
    )
}

export default LessonCard;