
import {
    Users,
    UserStar,
    Sparkles,
} from 'lucide-react'

function AddCourse() {
    return(
        <>
            <div className='mx-auto flex w-full max-w-8xl flex-col gap-6 p-4 pt-20 md:p-6 md:pt-6 lg:p-8'>
                <section className='relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-8'>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.10),_transparent_28%)]" />
                        
                        <div className='relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
                            <div className='max-w-2xl space-y-4'>
                                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm text-cyan-700">
                                    <Sparkles size={16} />
                                    All Course Managment Page
                                </div>

                                <div className='space-y-5'>
                                    <h1 className='roboto-bold text-2xl leading-tight text-slate-900 md:text-3xl'>Course Managment Managme Stap-Wise Course</h1>
                                </div>
                            </div>
                        </div>
                </section>

                <div className='flex w-full max-w-8xl items-center mx-auto h-100'>
                <div className='w-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-10 space-y-10 text-center'>
                    <h1 className='text-center roboto-semibold text-2xl text-slate-500'>Add Course</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input type="text" placeholder='Courses Name' className='outline-none border border-slate-900 p-2 rounded-lg' />

                        <input type="text" placeholder='Courses Name' className='outline-none border border-slate-900 p-2 rounded-lg' />
                    </div>

                    <button className='bg-cyan-950 text-white hover:bg-cyan-800 duration-200 cursor-pointer w-full p-3 rounded-lg'>Submit</button>
                </div>
                </div>

            </div>
        </>
    )
}

export default AddCourse;