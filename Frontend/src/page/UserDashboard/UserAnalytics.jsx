'use client';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessonsWithCourcesId } from "../../features/auth/authSlice";
import { GCLDS } from "../../data/UserDashbourdData/UserCourcesData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function UserAnalytics() {
    const dispatch = useDispatch();
    const { lessonsWithCourses, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!lessonsWithCourses || lessonsWithCourses.length === 0) {
            dispatch(getLessonsWithCourcesId());
        }
    }, [dispatch, lessonsWithCourses]);

    if (isLoading) return <div className="p-10 text-center">Loading...</div>;

    const formattedCourses = GCLDS({ lessonsWithCourses, isLoading });

    const chartData = formattedCourses.map(course => ({
        name: course.courcesName,
        progress: parseInt(course.ComplitedReat) || 0
    }));

    return (
        <div className="w-full bg-white min-h-[500px] p-5 md:p-10 rounded-2xl border border-slate-100">
            <h2 className="text-xl font-bold mb-5 text-slate-800">Course Progress</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis domain={[0, 100]} unit="%" stroke="#64748b" />
                    <Tooltip formatter={(value) => [`${value}%`, 'Progress']} />
                    <Bar dataKey="progress" fill="#3c9bf5" radius={[6, 6, 0, 0]} barSize={50} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default UserAnalytics;