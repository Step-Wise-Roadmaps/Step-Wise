
import { ChevronDown } from "lucide-react"

function GetUserCourses() {
    return(
        <div className="w-full rounded-lg border border-slate-300 p-5 space-y-8">
            <div className="flex items-center gap-2">
                <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full border-5 border-emerald-600">
                    <span className="text-sm roboto-regular text-slate-800">100%</span>
                </div>
                <p className="roboto-regula text-slate-600">Course 1</p>
            </div>
            <div className="w-full p-3 flex justify-between items-center hover:bg-slate-100 cursor-pointer duration-150 ease-in-out">
                <h1 className="md:text-4xl text-lg font-medium">Begin Your Journey</h1>
                <span><ChevronDown /></span>
            </div>
        </div>
    );

}

export default GetUserCourses;