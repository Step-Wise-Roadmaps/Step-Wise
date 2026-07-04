import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { progress, getCoursesLessonsByCourcesId } from "../../../features/auth/authSlice";

function Lessonvideos() {
  const { selectedLesson } = useOutletContext();
  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state) => state.auth); 

  const getEmbedUrl = (url) => {
    if (!url) return "";

    if (url.includes("youtu.be")) {
      const videoId = url.split("/").pop().split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes("watch?v=")) {
      const videoId = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  };

  const handleCompleteLesson = async () => {
    if (!selectedLesson || !user) return;

    const progressData = {
      user_id: user.id,
      skill_id: selectedLesson.skill_id || 1,
      lesson_id: selectedLesson.id,
      course_id: selectedLesson.course_id
    };

    await dispatch(progress(progressData));

    dispatch(getCoursesLessonsByCourcesId(selectedLesson.course_id));
  };

  if (!selectedLesson) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2>Select a lesson</h2>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col h-full">
      <h1 className="text-3xl font-bold mb-6">
        {selectedLesson.lesson_name}
      </h1>

      <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
        <iframe
          src={getEmbedUrl(selectedLesson.video_url)}
          title={selectedLesson.lesson_name}
          className="w-full h-130"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleCompleteLesson}
          disabled={isLoading}
          className={`px-6 py-3 rounded-xl font-bold text-white transition duration-200 cursor-pointer ${
            selectedLesson.is_completed 
              ? "bg-green-600 hover:bg-green-700" 
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {selectedLesson.is_completed ? "✓ Finished" : "Mark as Complete"}
        </button>
      </div>
    </div>
  );
}

export default Lessonvideos;