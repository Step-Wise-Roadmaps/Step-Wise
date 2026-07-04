
import { ChevronDown, Play } from "lucide-react"

function GetUserCourses({ index, openIndex, setOpenIndex, courseNumber, GCLD, handleCardClick }) {
    const isOpen = openIndex === index;

    const handleToggle = () => {
        setOpenIndex(isOpen ? null : index);
    };
    return(
        <div className="w-full rounded-lg border border-slate-300 p-5 space-y-8">
            <div className="flex items-center gap-2">
                <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full border-5 border-emerald-600">
                    <span className="text-sm roboto-regular text-slate-800">{GCLD.ComplitedReat}</span>
                </div>
                <p className="roboto-regula text-slate-600">Course {courseNumber}</p>
            </div>
            <div onClick={handleToggle}
            className="w-full p-3 flex justify-between items-center hover:bg-slate-100 cursor-pointer duration-150 ease-in-out">
                <h1 className="md:text-4xl text-lg font-medium">{GCLD.courcesName}</h1>
                <button type="button">
                    <span className={`text-lg text-cyan-900 transition-transform duration-300 inline-block 
                        ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown />
                    </span>
                </button>
            </div>
            {isOpen && (
                <div className="w-full pt-4 border-t border-slate-200 space-y-2">
                    {GCLD.lessons && GCLD.lessons.map((lesson, i) => (
                        <div className="flex gap-6">
                            <p key={i} className="text-sm text-slate-600 flex items-center gap-2">
                                <span className="text-emerald-500">•</span> {i + 1} {lesson}
                            </p>
                            <button className="rounded-full text-slate-500 border border-blue-200 px-4 py-2 cursor-pointer"  onClick={() => handleCardClick(GCLD.course_id)}> <Play /> </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

}

export default GetUserCourses;