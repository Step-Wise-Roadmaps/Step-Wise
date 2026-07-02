import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import { getCoursesLessonsByCourcesId } from "../../features/auth/authSlice";

import LessonSideBarContent from "../../components/UserDashboardCommponents/UserSideBarManagment/LessonSideBarContent";

function LessonSideBar() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const { lessonsWithCoursesId, isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (id) {
      dispatch(getCoursesLessonsByCourcesId(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (lessonsWithCoursesId.length > 0) {
      setSelectedLesson(lessonsWithCoursesId[0]);
    }
  }, [lessonsWithCoursesId]);

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

  if (isLoading) return <h1>Loading...</h1>;

  const courseName =
    lessonsWithCoursesId.length > 0
      ? lessonsWithCoursesId[0].course_name
      : "Course";

  return (
    <>
        <button 
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="fixed left-4 top-4 cursor-pointer w-11 h-11 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-lg md:hidden">
            <PanelLeftOpen size={22}/>
        </button>

        <div className="hidden md:block">
          <LessonSideBarContent 
            lessonsWithCoursesId={lessonsWithCoursesId}
            isLoading={isLoading}
          />
        </div>

        <div className={`md:hidden fixed inset-0 z-50 ${isMobileOpen ? "pointer-events-auto backdrop-blur-sm" : "pointer-events-none"}`}>

          <div className={`h-full max-w-[86vw] transition-transform duration-300 ease-out ${
            isMobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
              <LessonSideBarContent 
                lessonsWithCoursesId={lessonsWithCoursesId}
                isLoading={isLoading}
                onMobileClose={() => setIsMobileOpen(false)}
                mobile
            />
            </div>

            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="absolute inset-0 -z-10"
            />
        </div>
    </>
  );
}

export default LessonSideBar;