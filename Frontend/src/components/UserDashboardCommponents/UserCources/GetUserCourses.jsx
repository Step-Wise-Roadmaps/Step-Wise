
import { ChevronDown } from "lucide-react"

function GetUserCourses({ index, openIndex, setOpenIndex, courseNumber, item }) {
    const isOpen = openIndex === index;

    const handleToggle = () => {
        // If it's already open, close it (set to null). Otherwise, open this index.
        setOpenIndex(isOpen ? null : index);
    };
    return(
        <div className="w-full rounded-lg border border-slate-300 p-5 space-y-8">
            <div className="flex items-center gap-2">
                <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full border-5 border-emerald-600">
                    <span className="text-sm roboto-regular text-slate-800">{item.ComplitedReat}</span>
                </div>
                <p className="roboto-regula text-slate-600">Course {courseNumber}</p>
            </div>
            <div onClick={handleToggle}
            className="w-full p-3 flex justify-between items-center hover:bg-slate-100 cursor-pointer duration-150 ease-in-out">
                <h1 className="md:text-4xl text-lg font-medium">{item.courcesName}</h1>
                <button type="button">
                    <span className={`text-lg text-cyan-900 transition-transform duration-300 inline-block 
                        ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown />
                    </span>
                </button>
            </div>
            {isOpen && (
                <div className="w-full pt-4 border-t border-slate-200 space-y-2">
                    <div className="p-3 bg-slate-50 rounded-md">
                        <p className="text-sm text-slate-500">{item.LessosName}</p>
                    </div>
                </div>
            )}
        </div>
    );

}

export default GetUserCourses;