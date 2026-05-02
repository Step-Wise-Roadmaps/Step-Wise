
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
            icons: Users,
            tone: "from-cyan-500 to-blue-500",
        },

        {
            title: "Admin Users",
            value: "2",
            icons: Users,
            tone: "from-cyan-500 to-blue-500",
        }
    ]
    
    return(
        <>
            <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 pt-20 md:p-6 md:pt-6 lg:p-8'>
                <section className='relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-8'>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.10),_transparent_28%)]" />
                    
                    <div className='relative flex flex-col gap-6 lg-flex-row lg:items-center lg:justify-between'>
                        <div className='max-w-2xl space-y-4'>
                            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm text-cyan-700">
                                <Sparkles size={16} />
                                All User Managment Page
                            </div>

                            <div className='space-y-5'>
                                
                            </div>
                        </div>
                    </div>
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