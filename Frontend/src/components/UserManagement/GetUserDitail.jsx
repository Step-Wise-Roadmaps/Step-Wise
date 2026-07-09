'use client';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeft, User, Shield, BookOpen, CheckCircle, Award, RefreshCw, Check } from 'lucide-react';
import { getUserDetail, updateUserRole } from '../../features/auth/adminDashboardSlice'; 

function GetUserDitail() {
    const { user_id } = useParams();
    const dispatch = useDispatch();

    const { getUserDetail: apiResponse, isLoading } = useSelector((state) => state.admin);
    const [updatingRole, setUpdatingRole] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        if (user_id) {
            dispatch(getUserDetail(user_id));
        }
    }, [user_id, dispatch]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <p className="text-slate-500 roboto-medium animate-pulse">Loading information...</p>
            </div>
        );
    }

    if (!apiResponse) {
        return (
            <div className="p-10 text-center text-slate-500 roboto-regular">No data found.</div>
        );
    }

    const coursesProgress = apiResponse.data || apiResponse;
    const hasData = Array.isArray(coursesProgress) && coursesProgress.length > 0;

    const userInfo = hasData ? {
        full_name: coursesProgress[0].full_name,
        role: coursesProgress[0].role
    } : {};

    const chartData = hasData ? coursesProgress.map(course => ({
        name: course.course_name,
        progress: Number(course.course_progress_percent) || 0
    })) : [];

    const handleRoleChange = async (e) => {
        const newRole = e.target.value;
        setUpdatingRole(true);
        
        const result = await dispatch(updateUserRole({ user_id, role: newRole }));
        
        if (updateUserRole.fulfilled.match(result)) {
            dispatch(getUserDetail(user_id));
            setSuccessMessage(`Role successfully updated to ${newRole}!`);
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        }
        
        setUpdatingRole(false);
    };

    return (
        <div className="p-4 md:p-8 space-y-6 bg-slate-50 min-h-screen overflow-x-hidden">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="flex items-center gap-4">
                    <Link to="/admin-dashboard/users" className="text-slate-400 hover:text-blue-500 transition-colors p-1 hover:bg-slate-50 rounded-lg">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <span className="text-xs text-slate-400 font-mono block">User ID: #{user_id}</span>
                        <h1 className="text-xl roboto-bold text-slate-800">User Details Information</h1>
                    </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                    <div className={`flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs px-3 py-2 rounded-xl border border-emerald-200 shadow-sm transform transition-all duration-500 ease-out ${
                        successMessage 
                            ? 'translate-x-0 opacity-100 scale-100' 
                            : 'translate-x-10 opacity-0 scale-95 pointer-events-none absolute right-5'
                    }`}>
                        <Check size={14} className="text-emerald-500" />
                        <span className="roboto-medium">{successMessage}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200">
                        <Shield size={16} className="text-slate-500" />
                        <span className="text-xs font-medium text-slate-600 hidden md:inline roboto-medium">Change Role:</span>
                        <select 
                            value={userInfo.role || "user"} 
                            onChange={handleRoleChange}
                            disabled={updatingRole}
                            className="bg-white text-xs text-slate-700 font-medium py-1 px-2 rounded-lg border border-slate-200 focus:outline-none cursor-pointer disabled:opacity-50 roboto-medium"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        {updatingRole && <RefreshCw size={14} className="animate-spin text-blue-500" />}
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h2 className="text-xs font-semibold text-slate-400 tracking-wider mb-4 uppercase roboto-bold">General Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-500"><User size={20} /></div>
                        <div>
                            <span className="text-xs text-slate-400 block roboto-regular">Full Name</span>
                            <span className="roboto-medium text-slate-800 text-base">{userInfo.full_name || "N/A"}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-purple-50 rounded-xl text-purple-500"><Shield size={20} /></div>
                        <div>
                            <span className="text-xs text-slate-400 block roboto-regular">System Role</span>
                            <span className="bg-purple-100 text-purple-700 text-xs roboto-medium px-2 py-0.5 rounded-full capitalize inline-block mt-0.5">
                                {userInfo.role || "N/A"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="mb-6">
                    <h2 className="text-lg roboto-bold text-slate-800">Course Progress Chart</h2>
                    <p className="text-xs text-slate-400 roboto-regular">Direct database overview of course completion percentages</p>
                </div>
                <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} className="roboto-regular" />
                            <YAxis domain={[0, 100]} unit="%" stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} className="roboto-regular" />
                            <Tooltip 
                                formatter={(value) => [`${value}%`, 'Progress']} 
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', fontFamily: '"Roboto", sans-serif' }}
                            />
                            <Bar dataKey="progress" fill="#3c9bf5" radius={[6, 6, 0, 0]} barSize={45} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div>
                    <h2 className="text-lg roboto-bold text-slate-800">Courses Summary</h2>
                    <p className="text-xs text-slate-400 roboto-regular">Overall statistics calculated at database level</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-900">
                        <thead className="text-xs uppercase text-slate-500 bg-slate-50 rounded-lg roboto-bold">
                            <tr>
                                <th className="px-6 py-3">No.</th>
                                <th className="px-6 py-3">Course Name</th>
                                <th className="px-6 py-3">Total Lessons</th>
                                <th className="px-6 py-3">Completed Lessons</th>
                                <th className="px-6 py-3">Progress Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hasData ? (
                                coursesProgress.map((course, index) => (
                                    <tr key={course.course_id || index} className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors roboto-regular">
                                        <td className="px-6 py-4 font-mono text-slate-500">{(index + 1).toString().padStart(2, '0')}</td>
                                        <th className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap roboto-medium">{course.course_name}</th>
                                        <td className="px-6 py-4 text-slate-600"><BookOpen size={14} className="inline text-slate-400 mr-1" /> {course.total_lessons} Lessons</td>
                                        <td className="px-6 py-4 text-slate-600"><CheckCircle size={14} className="inline text-emerald-600 mr-1" /> {course.completed_lessons} Completed</td>
                                        <td className="px-6 py-4 font-semibold text-blue-600 roboto-bold"><Award size={14} className="inline text-blue-400 mr-1" /> {course.course_progress_percent}%</td>
                                    </tr>
                                ))
                            ) : (
                                <tr><td colSpan="5" className="px-6 py-10 text-center text-slate-400 roboto-regular">This user hasn't started any courses yet.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default GetUserDitail;