
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
    UserStar,
} from 'lucide-react'

function UsersHeader() {
    
    const stats = [
        {
            title: "Total Users",
            value: "3",
            icon: Users,
            tone: "from-cyan-500 to-blue-500",
        },

        {
            title: "Admin Users",
            value: "2",
            icon: UserStar,
            tone: "from-emerald-500 to-teal-500",
        },

        // {
        //     title: "Admin Users",
        //     value: "2",
        //     icon: Users,
        //     tone: "from-amber-500 to-orange-500",
        // }
    ]
    
    return(
        <>
            <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 pt-20 md:p-6 md:pt-6 lg:p-8'>
                <section className='relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-8'>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.10),_transparent_28%)]" />
                    
                    <div className='relative flex flex-col gap-6 lg-flex-row lg:justify-between'>
                        <div className='max-w-2xl space-y-4'>
                            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm text-cyan-700">
                                <Sparkles size={16} />
                                All User Managment Page
                            </div>

                            <div className='space-y-5'>
                                <h1 className='roboto-bold text-2xl leading-tight text-slate-900 md:text-3xl'>User Managment Managme Stap-Wise Users</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='overflow-hidden grid gap-4 md:grid-cols-2'>
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div key={stat.title} className='relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1'>
                                <div className='flex items-start justify-between gap-4'>
                                    <div>
                                        <p className='text-sm text-slate-500'>{stat.title}</p>
                                        <h2 className='mt-3 roboto-bold text-3xl text-slate-900'>{stat.value}</h2>
                                    </div>

                                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.tone} text-white shadow-lg`}>
                                        <Icon size={22} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
        </>
    ) 
}

function UsersPage() {
    return(
        <>
            <UsersHeader />
        </>
    )
}

export default UsersPage;