
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom";

function LessonSideBarContent() {

    const navigate = useNavigate();

    return(
        <>
            <aside className="relative h-screen flex flex-col overflow-hidden rounded-none border-r border-slate-200 bg-slate-100 text-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.05)] w-72">
                {/* <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-100 via-blue-50 to-transparent" />
                    <div className="absolute -left-20 top-28 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />
                    <div className="absolute bottom-20 right-0 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl" />
                </div> */}

                <div
                    onClick={() => navigate("/user-dashboard/user-courses")}
                    className="w-full hover:bg-slate-200 flex cursor-pointer transition duration-200 border-b border-slate-300 p-4 justify-between">
                        <div className="flex gap-2">
                        <ArrowLeft /> 
                        Overview
                        </div>
                        {/* <div className=""></div> */} {/* */}
                </div>

                <div className="p-4 w-full space-y-2 border-b border-slate-300">
                    <h4 className="roboto-medium">Programming Fundamentals</h4>
                    <div className="flex items-center">
                        <hr className="w-full h-0.5 bg-blue-500 border-none" />
                        <p className="roboto-medium">100%</p>
                    </div>
                </div>
                <div className="w-full p-4 border-b border-slate-300">
                    <div className="bg-white p-3 rounded-xl m-0 hover:bg-blue-100 hover:border border-blue-500 cursor-pointer duration-200">
                        <p className="roboto-semibold">Begin Your Journey</p>
                    </div>
                </div>

                <div className="p-4 hover:bg-slate-200 mt-5 cursor-pointer">
                    <h3 className="roboto-semibold">Get Start</h3>
                </div>
            </aside>
        </>
    )
}

export default LessonSideBarContent;