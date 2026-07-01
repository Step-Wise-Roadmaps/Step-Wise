import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Menu, X, Circle, CheckCircle } from "lucide-react";
import { getCoursesLessonsByCourcesId } from "../../features/auth/authSlice";

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
        
    </>
  );
}

export default LessonSideBar;