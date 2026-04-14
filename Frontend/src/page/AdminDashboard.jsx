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
} from "lucide-react";
import AdminSideBar from "../components/AdminSideBar.jsx";
import profilePhoto from "../assets/sideBarLogo/profilePhoto.png";

const stats = [
    {
        title: "Total Students",
        value: "1,284",
        change: "+12.5%",
        note: "New enrollments this month",
        icon: Users,
        tone: "from-cyan-500 to-blue-500",
    },
    {
        title: "Active Courses",
        value: "36",
        change: "+4",
        note: "Published and visible",
        icon: BookOpen,
        tone: "from-emerald-500 to-teal-500",
    },
    {
        title: "Lessons Completed",
        value: "8,940",
        change: "+18%",
        note: "Compared to last month",
        icon: GraduationCap,
        tone: "from-amber-500 to-orange-500",
    },
];

const quickActions = [
    "Add a new course",
    "Review pending instructors",
    "Publish weekly announcements",
    "Export student report",
];

const recentActivities = [
    { title: "Frontend Fundamentals updated", time: "10 minutes ago", status: "Course edited" },
    { title: "24 new students registered", time: "45 minutes ago", status: "Enrollment growth" },
    { title: "Lesson review queue cleared", time: "2 hours ago", status: "Content moderation" },
    { title: "Monthly analytics exported", time: "Today, 9:00 AM", status: "Reporting" },
];

function AdminDashboard() {
    return (
        <div className="flex min-h-screen w-full bg-slate-50 text-slate-900">
            <AdminSideBar />

            <main className="flex-1 overflow-y-auto">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 pt-20 md:p-6 md:pt-6 lg:p-8">
                    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-8">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.10),_transparent_28%)]" />

                        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl space-y-4">
                                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm text-cyan-700">
                                    <Sparkles size={16} />
                                    Admin workspace overview
                                </div>

                                <div className="space-y-3">
                                    <h1 className="roboto-bold text-3xl leading-tight text-slate-900 md:text-4xl">
                                        Welcome back, manage your learning platform with clarity.
                                    </h1>
                                    <p className="max-w-xl text-sm leading-7 text-slate-600 md:text-base">
                                        Track student growth, monitor course performance, and respond to the most
                                        important admin tasks from one clean dashboard.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-sm text-slate-500">Today's focus</p>
                                    <p className="mt-2 roboto-semibold text-lg text-slate-900">
                                        Course approvals and student support
                                    </p>
                                    <p className="mt-1 text-sm text-slate-500">Keep response time under 3 hours</p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-slate-900 p-4 text-white">
                                    <p className="text-sm text-slate-300">Admin profile</p>
                                    <div className="mt-3 flex items-center gap-3">
                                        <img
                                            className="h-12 w-12 rounded-full border border-white/20 object-cover"
                                            src={profilePhoto}
                                            alt="Admin profile"
                                        />
                                        <div>
                                            <p className="roboto-medium text-base">Sarah Admin</p>
                                            <p className="text-sm text-slate-300">Platform Owner</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="grid gap-4 md:grid-cols-3">
                        {stats.map((stat) => {
                            const Icon = stat.icon;

                            return (
                                <article
                                    key={stat.title}
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

                    <section className="grid gap-6 xl:grid-cols-[1.55fr_1fr]">
                        <div className="space-y-6">
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <h2 className="roboto-bold text-xl text-slate-900">Quick Actions</h2>
                                        <p className="mt-1 text-sm text-slate-500">
                                            Common admin tasks to keep the platform moving.
                                        </p>
                                    </div>
                                    <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
                                        <Layers3 size={20} />
                                    </div>
                                </div>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {quickActions.map((action) => (
                                        <button
                                            key={action}
                                            type="button"
                                            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-left text-sm text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800"
                                        >
                                            <span className="flex items-center justify-between gap-3">
                                                <span className="roboto-medium">{action}</span>
                                                <ArrowUpRight size={16} />
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <h2 className="roboto-bold text-xl text-slate-900">Recent Activity</h2>
                                        <p className="mt-1 text-sm text-slate-500">
                                            The latest actions across courses, students, and reports.
                                        </p>
                                    </div>
                                    <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-700">
                                        <Activity size={20} />
                                    </div>
                                </div>

                                <div className="mt-6 space-y-4">
                                    {recentActivities.map((activity) => (
                                        <div
                                            key={activity.title}
                                            className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
                                        >
                                            <div>
                                                <p className="roboto-medium text-slate-900">{activity.title}</p>
                                                <p className="mt-1 text-sm text-slate-500">{activity.status}</p>
                                            </div>
                                            <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                                                <Clock3 size={16} />
                                                {activity.time}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">

                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h2 className="roboto-bold text-xl text-slate-900">Platform Summary</h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    A quick view of the most important operational signals.
                                </p>

                                <div className="mt-5 space-y-4">
                                    <div className="rounded-2xl bg-slate-50 p-4">
                                        <div className="flex items-center justify-between text-sm text-slate-600">
                                            <span>Course completion rate</span>
                                            <span className="roboto-medium text-slate-900">78%</span>
                                        </div>
                                        <div className="mt-3 h-2 rounded-full bg-slate-200">
                                            <div className="h-2 w-[78%] rounded-full bg-cyan-500" />
                                        </div>
                                    </div>

                                    <div className="rounded-2xl bg-slate-50 p-4">
                                        <div className="flex items-center justify-between text-sm text-slate-600">
                                            <span>Instructor approval progress</span>
                                            <span className="roboto-medium text-slate-900">64%</span>
                                        </div>
                                        <div className="mt-3 h-2 rounded-full bg-slate-200">
                                            <div className="h-2 w-[64%] rounded-full bg-emerald-500" />
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800">
                                        <div className="flex items-center gap-2">
                                            <CircleCheckBig size={18} />
                                            All core systems are running normally.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default AdminDashboard;
