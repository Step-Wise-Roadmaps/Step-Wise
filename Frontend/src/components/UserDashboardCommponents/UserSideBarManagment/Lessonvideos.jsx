import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { progress, getCoursesLessonsByCourcesId } from "../../../features/auth/authSlice";

function Lessonvideos() {
  const { selectedLesson } = useOutletContext();
  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state) => state.auth); 

  const getEmbedUrl = (url) => {
    if (!url) return "";

    try {
      if (url.includes("youtu.be")) {
        const videoId = url.split("/").pop().split("?")[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }

      if (url.includes("watch?v=")) {
        const videoId = new URL(url).searchParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch (error) {
      console.error("Invalid URL format:", error);
    }

    return url;
  };

  const handleCompleteLesson = async () => {
    if (!selectedLesson || !user || isLoading) return;

    const progressData = {
      user_id: user.id,
      skill_id: selectedLesson.skill_id,
      lesson_id: selectedLesson.id,
      course_id: selectedLesson.course_id
    };

    await dispatch(progress(progressData));
    dispatch(getCoursesLessonsByCourcesId(selectedLesson.course_id));
  };

  if (!selectedLesson) {
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-4rem)] p-4 text-center">
        <div className="text-slate-400 mb-2">
          <svg className="w-16 h-16 mx-auto animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-slate-500">Select a lesson to start learning</h2>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 mt-15 p-4 sm:p-6 lg:p-10 flex justify-center">
      <div className="w-full max-w-5xl flex flex-col space-y-6">

        {/* Lesson Header */}
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            {selectedLesson.lesson_name}
          </h1>
        </div>

        <div className="w-full h-[60vh] sm:h-auto sm:aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-slate-900/10">
          <iframe
            src={getEmbedUrl(selectedLesson.video_url)}
            title={selectedLesson.lesson_name}
            className="w-full h-full object-contain"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row justify-end items-center pt-2">
          <button
            onClick={handleCompleteLesson}
            disabled={isLoading}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white shadow-md transition-all duration-200 flex items-center justify-center gap-2
              ${isLoading ? "opacity-60 cursor-not-allowed" : ""}
              ${selectedLesson.is_completed
                ? "bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-200"
                : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-200"
              }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </>
            ) : selectedLesson.is_completed ? (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                Finished
              </>
            ) : (
              "Mark as Complete"
            )}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Lessonvideos;